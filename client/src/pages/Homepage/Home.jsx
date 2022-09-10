import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import "./Home.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DataTable from "react-data-table-component";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import Stack from "@mui/material/Stack";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import dayjs from "dayjs";
import moment from "moment";
import { useDispatch } from "react-redux";
import { createProject } from "../../features/project/projectActions";
import api from "../../api/axiosConfig";
import { useLocation, useNavigate } from "react-router-dom";
var randomString = require("random-string");



// modal for create and join project
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  margin: "auto",
  transform: "translate(-50%, -50%)",
  width: "auto",
  
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
};

const Home = () => {
  let user = JSON.parse(localStorage.getItem("userToken"));
  const [projects, setprojects] = useState([]);
   const [refresh, setrefresh] = useState(false);

  let location = useLocation();
   const navigate = useNavigate();

  useEffect(() => {
    function myProjects() {
      const myId = user._id;
      console.log(myId,"user id details")
      api.get(`/myCreatedProjects/${myId}`).then((response) => {
        setprojects(response.data);
      });
    }
    myProjects();
  }, [location,refresh]);


  const openProject = async (projectId) => {
    try {
      navigate(`/project/workflow/${projectId}`);
    } catch (error) {
      throw new error(error.response.data.message);
    }
  };

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "start-date",
      selector: (row) => row.startDate,
    },
    {
      name: "end-date",
      selector: (row) => row.endDate,
    },
    {
      name: "status",
      selector: (row) => (row.createdBy === user._id ? "created" : "joined"),
    },
    {
      name: "view details",
      cell: (row) => (
        <Button
          style={{ backgroundColor: "black" }}
          onClick={() => {
            openProject(row._id);
          }}
        >
          open
        </Button>
      ),
    },
  ];

  const dispatch = useDispatch();

  //create project
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //join project
  const [openJoin, setOpenJoin] = React.useState(false);
  const handleJoinOpen = () => setOpenJoin(true);
  const handleJoinClose = () => setOpenJoin(false);

  //project start and end date
  const [startDate, setStartDate] = React.useState(dayjs());
  const [endDate, setEndDate] = React.useState(dayjs());

  //submit handler for create project
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //submit handler for join project
    const {
      register : register2,
      handleSubmit : handleSubmit2,
      formState: { errors : errors2 },
    } = useForm();


    //handler for create project
  const onSubmit = (data) => {
    let details = {
      title: data.title,
      description: data.description,
      startDate: moment(data.startDate).format("YYYY-MM-DD"),
      endDate: moment(data.endDate).format("YYYY-MM-DD"),
      createdBy: user._id,
      projectID: randomString({ length: 6 }),
    };
    handleClose()
    setrefresh(!refresh)

    dispatch(createProject(details));
  };

  //handler for join project
  const joinProject = async(data) =>{
    const joinDetails = {
      email : user.email,
      projectCode: data.join,
      userId : user._id
    }
    handleJoinClose()
    setrefresh(!refresh)
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let { invite } = await api.post("/joinProject", joinDetails, config);
      if(invite){
        console.log(invite,"suceess")
      }

    } catch (error) {
      
    }
    
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} xs={8} md={12}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            create a project
          </Typography>
          <Box m={3} component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container style={{ justifyContent: "space-around" }}>
              <Grid item>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="Project Title"
                  name="title"
                  autoFocus
                  {...register("title", { shouldValidate: true })}
                />
              </Grid>

              <Grid item>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="description"
                  label="Project Description"
                  name="description"
                  autoFocus
                  {...register("description", { required: "true" })}
                />
              </Grid>

              <Grid item>
                <Controller
                  name="startDate"
                  defaultValue={startDate}
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, ...restField } }) => (
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                      <Stack>
                        <MobileDatePicker
                          label="Start Date"
                          onChange={(event) => {
                            onChange(event);
                            setStartDate(event);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                          {...restField}
                        />
                      </Stack>
                    </LocalizationProvider>
                  )}
                />
              </Grid>

              <Grid item>
                <Controller
                  name="endDate"
                  defaultValue={endDate}
                  control={control}
                  render={({ field: { onChange, ...restField } }) => (
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                      <Stack>
                        <MobileDatePicker
                          label="End Date"
                          onChange={(event) => {
                            onChange(event);
                            setEndDate(event);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                          {...restField}
                        />
                      </Stack>
                    </LocalizationProvider>
                  )}
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                create
              </Button>
            </Grid>
          </Box>
        </Box>
      </Modal>

      {/* //join project */}
      <Modal
        open={openJoin}
        onClose={handleJoinClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={handleSubmit2(joinProject)}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter invite code
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="join"
              name="join"
              autoFocus
              {...register2("join", { shouldValidate: true })}
            />
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Invite
          </Button>
        </Box>
      </Modal>

      {/* first row */}
      <Grid container className="newProject">
        {/* col section one */}
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 2,
                width: 150,
                height: 150,
              },
            }}
          >
            <Paper className="paper1" elevation={8}>
              <img
                className="join"
                src={process.env.PUBLIC_URL + "images/joinProject.webp"}
                alt=""
              />
            </Paper>
          </Box>
          <Button variant="contained" onClick={handleJoinOpen}>
            Join a project
          </Button>
        </Grid>

        {/* col section 2 */}
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 150,
                height: 150,
              },
            }}
          >
            <Paper className="paper1" elevation={8}>
              <img
                className="join"
                src={process.env.PUBLIC_URL + "images/createProject.webp"}
                alt=""
              />
            </Paper>
          </Box>
          <Button variant="contained" onClick={handleOpen}>
            Create a project
          </Button>
        </Grid>
      </Grid>

      {/* 2nd row table */}
      <hr />
      <Grid container md={11} className="projectTable">
        <DataTable
          title="Projects"
          columns={columns}
          data={projects}
          pagination
          fixedHeader
          highlightOnHover
        />
      </Grid>
    </>
  );
};

export default Home;

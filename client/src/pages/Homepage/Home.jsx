import React from "react";
import Grid from "@mui/material/Grid";
import "./Home.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DataTable from "react-data-table-component";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useForm, Controller } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import Stack from "@mui/material/Stack";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import dayjs from "dayjs";
import moment from "moment";

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];

// modal for create project
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
  //create project
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //join project
  const [openJoin, setOpenJoin] = React.useState(false);
  const handleJoinOpen = () => setOpenJoin(true);
  const handleJoinClose = () => setOpenJoin(false);


   const [startDate, setStartDate] = React.useState(dayjs());
   const [endDate, setEndDate] = React.useState(dayjs());

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

   const onSubmit = (data) => {
    let details = {
      title: data.title,
      description: data.description,
      startDate: moment(data.startDate).format("YYYY-MM-DD"),
      endDate: moment(data.endDate).format("YYYY-MM-DD"),
    };
    
     console.log(details);
   };

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
                create project
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
        <Box sx={style} xs={8}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
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
      <Grid container mt={3} md={11} className="projectTable">
        <DataTable
          title="Projects"
          columns={columns}
          data={data}
          pagination
          fixedHeader
          highlightOnHover
        />
      </Grid>
    </>
  );
};

export default Home;

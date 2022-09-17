import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import {
  Box,
  Button,
  Grid,
  Modal,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import dayjs from "dayjs";
import moment from "moment";
import { useDispatch } from "react-redux";
import { createProject } from "../../features/project/projectActions";
var randomString = require("random-string");


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

const CreateProject = () =>{
  let user = JSON.parse(localStorage.getItem("userToken"));
  const [refresh, setrefresh] = useState(false);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    handleClose();
    setrefresh(!refresh);
    dispatch(createProject(details));
  };

  return (
    <>
      {/* create project modal */}
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
                  error={!!errors.title}
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="Project Title"
                  name="title"
                  autoFocus
                  {...register("title", {
                    required: true,
                  })}
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

      {/* create project logo and button */}
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
    </>
  );
}

export default CreateProject
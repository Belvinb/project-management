import React, { useEffect, useState } from 'react'
import {Box,Modal,Button, Typography, Grid, TextField, Stack, MenuItem} from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { useDispatch } from 'react-redux'
import api from "../../../api/axiosConfig";
import dayjs from "dayjs";
import moment from "moment";
import { createTaskAction } from '../../../features/task/taskActions'


const style = {
    position:'absolute',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)',
    width:'400',
    bgcolor:'background.paper',
    border:'2px solid #000',
    boxShadow:24,
    pt:2,
    px:4,
    pb:3,
}



const CreateTask = () =>{
  //project id from local storage
  let projectId = JSON.parse(localStorage.getItem("projectId"));
  let user = JSON.parse(localStorage.getItem("userToken"))

  //dispatch function
  const dispatch = useDispatch();

  //   project members state
  const [members, setmembers] = useState([]);

  //current assigned member
  const [assigned, setassigned] = useState("");

  //open parent modal
  const [open, setOpen] = useState(false);

  //project start and end date
  const [startDate, setStartDate] = React.useState(dayjs());
  const [endDate, setEndDate] = React.useState(dayjs());

  //useeffect to display selected member
  useEffect(() => {
    console.log(assigned);
  }, [assigned]);

  //get project members on clicking create task
  async function getMembers() {
    console.log(projectId);
    return await api.get(`/getTeam/${projectId}`).then((response) => {
      setmembers(response.data[0].projectmems);
      console.log(members, "memss");
    });
  }

  //open parent modal and get members
  const handleOpen = () => {
    getMembers();
    setOpen(true);
  };

  //close modal
  const handleClose = () => {
    setOpen(false);
  };

  //submit controlller parent modal
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //create task submit controller
  const createTask = (data) => {
    console.log("soefd");
    console.log(data, "");
    let taskDetails = {
      taskTitle : data.taskTitle,
      taskDescription : data.taskDescription,
      startDate : moment(data.startDate).format("YYYY-MM-DD"),
      endDate : moment(data.endDate).format("YYYY-MM-DD"),
      assigned:data.assigned,
      createdBy:user._id,
      projectId:projectId
    }
    handleClose()
    dispatch(createTaskAction(taskDetails));
  };
  return (
    <>
      <Button onClick={handleOpen}>Create Task</Button>
      {/* parent modal */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: "auto" }} xs={8} md={12}>
          <Typography id="parent-modal-title" variant="h6" component="h2">
            Create Task
          </Typography>
          {/* create task form */}
          <Box component="form" onSubmit={handleSubmit(createTask)}>
            <Grid container style={{ justifyContent: "space-around" }}>
              {/* task title component */}
              <Grid item>
                <Controller
                  name="taskTitle"
                  control={control}
                  rules={{ required: true }}
                  defaultValue=""
                  render={({ field: { ref, ...field } }) => (
                    <TextField
                      {...field}
                      inputRef={ref}
                      id="taskTitle"
                      variant="outlined"
                      fullWidth
                      error={!!errors.taskTitle}
                      helperText={
                        !!errors.taskTitle ? "please enter task title" : ""
                      }
                      label="Task Title"
                    />
                  )}
                />
              </Grid>

              {/* task description */}

              <Grid item>
                <Controller
                  name="taskDescription"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { ref, ...field } }) => (
                    <TextField
                      {...field}
                      inputRef={ref}
                      id="taskDescription"
                      variant="outlined"
                      fullWidth
                      multiline
                      error={!!errors.taskDescription}
                      helperText={
                        !!errors.taskDescription
                          ? "please enter the task description"
                          : ""
                      }
                      label="Task Description"
                    />
                  )}
                />
              </Grid>

              {/* task start date */}
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

              {/* task end date */}
              <Grid item>
                <Controller
                  name="endDate"
                  control={control}
                  defaultValue={endDate}
                  rules={{ required: true }}
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

              {/* assigned member */}
              <Grid item>
                <Controller
                  name="assigned"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, ...restField } }) => (
                    <TextField
                      {...restField}
                      id="outlined-select-currency"
                      select
                      value={assigned}
                      label="Select"
                      onChange={(event) => {
                        onChange(event);
                        setassigned(event.target.value);
                        console.log(assigned, "iii");
                      }}
                      helperText="Please select your currency"
                    >
                      {members.map((option) => (
                        <MenuItem key={option.email} value={option.email}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </TextField>
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
    </>
  );
}

export default CreateTask
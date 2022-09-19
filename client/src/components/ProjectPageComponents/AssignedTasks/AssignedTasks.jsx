import React, { useState } from "react";
import DataTable from "react-data-table-component";
import api from "../../../api/axiosConfig";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, MenuItem, TextField } from "@mui/material";
import { changeTaskStatus } from "../../../features/task/taskActions";


const projectStatus = [
  {
    value:"pending",
    label:"pending",
  },
  {
    value:"ongoing",
    label:"ongoing"
  },
  {
    value:"review",
    label:"review"
  }
]




//assigned tasks
const AssignedTasks = () => {

  const { taskDetails } = useSelector((state) => state.task);
  let projectId = JSON.parse(localStorage.getItem("projectId"));
  let user = JSON.parse(localStorage.getItem("userToken"));
  let location = useLocation();
  const [assignedTasks, setassignedTasks] = useState([]);
  
  const [status,setStatus] = useState('')

   const dispatch = useDispatch();

  const handleChange = (event,param1) => {
    setStatus(event.target.value)
    const data = {
      status : event.target.value,
      taskId : param1
    }
    dispatch(changeTaskStatus(data));
  };

  useEffect(() => {
    async function viewAssignedTasks() {
      return await api
        .get(`/viewAssignedTasks?projectId=${projectId}&email=${user.email}`)
        .then((response) => {
          setassignedTasks(response.data);
        });
    }
    viewAssignedTasks();
  }, [location, taskDetails, projectId]);


  const columns = [
    {
      name: "Title",
      selector: (row) => row.taskTitle,
    },
    {
      name: "Description",
      selector: (row) => row.taskDescription,
    },
    {
      name: "StartDate",
      selector: (row) => row.startDate,
    },
    {
      name: "endDate",
      selector: (row) => row.endDate,
    },
    {
      name: "status",
      selector: (row) => row.status,
    },
    {
      name: "change status",
      cell: (row) => (
        <TextField
          id="outlined-select-currency"
          select
          value={row.status? row.status : status}
          onChange={event => handleChange(event,row._id)}
        >
          {projectStatus.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      ),
    },
  ];

  return (
    <>
      <DataTable
        title="Assigned Task"
        columns={columns}
        data={assignedTasks}
        pagination
        fixedHeader
        highlightOnHover
      />
    </>
  );
};

export default AssignedTasks;

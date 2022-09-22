import React, { useState } from "react";
import DataTable from "react-data-table-component";
import api from "../../../api/axiosConfig";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import ViewSingleTask from "./ViewSingleTask";

const AllTasks = () => {
  const { taskDetails } = useSelector((state) => state.task);

  let projectId = JSON.parse(localStorage.getItem("projectId"));

  let location = useLocation();

  const [allTasks, setallTasks] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [taskId,setTaskId] = React.useState("")


  const handleOpen = (id) => {
    setTaskId(id);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  

  //get all tasks
  useEffect(() => {
    async function viewAllTasks() {
      return await api.get(`viewAllTasks/${projectId}`).then((response) => {
        setallTasks(response.data);
      });
    }
    viewAllTasks();
  }, [location, taskDetails, projectId]);

  //data table values
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
      name: "Details",
      cell: (row) => (
        <Button
          style={{
            backgroundColor: "White",
            color: "Blue",
            border: "1px solid blue",
          }}
          onClick={() => {
            handleOpen(row._id);
          }}
        >
          open
        </Button>
      ),
    },
  ];

  return (
    <>
      <ViewSingleTask open={open} handleClose={handleClose} taskId={taskId} />
      <DataTable
        title="All Tasks"
        columns={columns}
        data={allTasks}
        pagination
        fixedHeader
        highlightOnHover
      />
    </>
  );
};

export default AllTasks;

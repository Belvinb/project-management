import React, { useState } from "react";
import DataTable from "react-data-table-component";
import api from "../../../api/axiosConfig";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

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
];

const AllTasks = () => {
  const { taskDetails } = useSelector((state) => state.task);
  let projectId = JSON.parse(localStorage.getItem("projectId"));
  let location = useLocation();
  const [allTasks, setallTasks] = useState([]);

  useEffect(() => {
    async function viewAllTasks() {
      return await api.get(`viewAllTasks/${projectId}`).then((response) => {
        setallTasks(response.data);
      });
    }
    viewAllTasks();
  }, [location, taskDetails, projectId]);

  return (
    <>
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

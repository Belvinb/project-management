import React, { useEffect, useState } from "react"
import Button from "@mui/material/Button";
import DataTable from "react-data-table-component";
import api from "../../api/axiosConfig";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const ViewProject = () =>{
      const { projectDetails } = useSelector((state) => state.project);
      let user = JSON.parse(localStorage.getItem("userToken"));
      const [projects, setprojects] = useState([]);
      let location = useLocation();
      const navigate = useNavigate();

      useEffect(() => {
        function myProjects() {
          const myId = user._id;
          console.log(myId, "user id details");
          api.get(`/myCreatedProjects/${myId}`).then((response) => {
            setprojects(response.data);
          });
        }
        myProjects();
      }, [location, projectDetails]);


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
          selector: (row) =>
            row.createdBy === user._id ? "created" : "joined",
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

    return (
      <>
        <DataTable
          title="Projects"
          columns={columns}
          data={projects}
          pagination
          fixedHeader
          highlightOnHover
        />
      </>
    );
}

export default ViewProject
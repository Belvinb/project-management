import React from "react";
import DataTable from "react-data-table-component";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import api from "../../../api/axiosConfig";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const columns = [
  {
    name: "Title",
    selector: (row) => row.name,
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
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ProjectTeam = () => {
  const [open, setOpen] = React.useState(false);
  const [members,setmembers] = React.useState([])
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let projectId = JSON.parse(localStorage.getItem("projectId"));
  let location = useLocation();

  useEffect(() => {
    async function myTeam(){
      console.log(projectId)
      return await api.get(`/getTeam/${projectId}`).then((response) => {
        setmembers(response.data[0].projectmems)
        console.log(members)
      });

    }
    myTeam()
  }, [location])

 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const inviteDetails = {
      projectId: projectId,
      email: data.invite,
    };
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let { invite } = await api.post("/invite", inviteDetails, config);
      if (invite) {
        console.log(invite, "suceess");
      }
    } catch (error) {}
  };

  return (
    <div>
      <Button onClick={handleOpen}>Add members</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={handleSubmit(onSubmit)}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Invite members
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="invite"
              name="invite"
              autoFocus
              {...register("invite", { shouldValidate: true })}
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

      <DataTable columns={columns} data={members} />
    </div>
  );
};

export default ProjectTeam;

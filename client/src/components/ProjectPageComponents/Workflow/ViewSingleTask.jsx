import * as React from "react";
import { Box, Modal } from "@mui/material";
import api from "../../../api/axiosConfig";
import Loader from "../../loader/Loader";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: 300,
};

const ViewSingleTask = ({ open, handleClose, taskId }) => {
  const [taskDetails,setTaskDetails] = React.useState({})
  const [loading,setLoading] = React.useState(false)
  React.useEffect(() => {
    async function getTaskDetails() {
      setLoading(true)
      try {
        return await api
          .get(`getSingleTaskDetails/${taskId}`)
          .then((response) => {
            console.log(response.data)
            setTaskDetails(response.data)
            setLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
     
    }

    getTaskDetails();
  }, [taskId]);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {loading && <Loader/>}
          <h5>Task Title</h5>
          <h3>{taskDetails.taskTitle}</h3>
          <h5>Task Description</h5>
          <h3>{taskDetails.taskDescription}</h3>
        </Box>
      </Modal>
    </div>
  );
};

export default ViewSingleTask;

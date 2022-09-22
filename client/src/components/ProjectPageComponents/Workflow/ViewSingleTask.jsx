import * as React from "react";
import { Box, Modal } from "@mui/material";
import api from "../../../api/axiosConfig";

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
  React.useEffect(() => {
    async function getTaskDetails() {
      try {
        return await api
          .get(`getSingleTaskDetails/${taskId}`)
          .then((response) => {
            console.log(response.data);
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
        <Box sx={style}></Box>
      </Modal>
    </div>
  );
};

export default ViewSingleTask;

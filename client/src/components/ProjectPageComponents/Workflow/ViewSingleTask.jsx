import * as React from "react";
import {
  Box,
  Button,
  Grid,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import api from "../../../api/axiosConfig";
import Loader from "../../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addComment,createSubTask } from "../../../features/task/taskActions";
import { useForm } from "react-hook-form";
import DataTable from "react-data-table-component";
import moment from "moment";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "50rem",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p:2,
  margin: "auto",
  overflowY:"scroll",
  height:"500px",
};

//display selected task details after clicking open button
const ViewSingleTask = ({ open, handleClose, taskId }) => {
  let user = JSON.parse(localStorage.getItem("userToken"));
  const [taskDetails, setTaskDetails] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [comment, setComment] = React.useState("");
  const dispatch = useDispatch();
  const { singleTask } = useSelector((state) => state.task);
  React.useEffect(() => {
    async function getTaskDetails() {
      setLoading(true);
      try {
        return await api
          .get(`/getSingleTaskDetails/${taskId}`)
          .then((response) => {
            console.log(response.data);
            setTaskDetails(response.data[0]);
            setLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    }

    getTaskDetails();
  }, [taskId, singleTask]);

  //data table values
  const columns = [
    {
      selector: (row) => row.subtask,
    },
    
  ];

  //handle comment input
  const handleComment = (event) => {
    setComment(event.target.value);
  };

  //submit the comments
  const submitComment = () => {
    console.log(comment, "comment");
    const commentData = {
      commentBody: comment,
      taskinfo: taskId,
      userName: user.name,
      Date: moment().format("DD-MM-YYYY"),
      Time: moment().format("hh:mm"),
    };
    console.log(commentData, "body");
    dispatch(addComment(commentData));
    setComment("");
  };

  //child modal component for sub tasks
  function SubTaskModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    //handler for create subtasks
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
      console.log(data, "subtask data");
      const details = {
        subtask: data.subTask,
        taskId: taskDetails._id,
        createdOn: moment().format("DD-MM-YYYY"),
        createdBy: user._id,
      };
      console.log("details", details);
      dispatch(createSubTask(details));
    };

    return (
      <React.Fragment>
        <Button onClick={handleOpen}>Create</Button>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box
            sx={{ ...style, width: 200, height: 260 }}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h4 id="child-modal-title">SubTask Description</h4>
            <TextField
              name="subTask"
              id="subTask"
              {...register("subTask", { required: true })}
            />
            <Button type="submit">Add</Button>
            <Button onClick={handleClose}>Close</Button>
          </Box>
        </Modal>
      </React.Fragment>
    );
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} xs={8} md={12}>
          {loading && <Loader />}
          <Typography id="modal-modal-title" variant="h6" component="h2" mb={3}>
            {taskDetails.taskTitle}
          </Typography>

          <Grid container>
            <Grid item md={6}>
              <h4>Description:</h4>
              <p style={{ width: "180px", overflowWrap: "break-word" }}>
                {taskDetails.taskDescription}
              </p>
              <hr
                style={{
                  marginTop: "1.2rem",
                  width: "50%",
                  marginRight: "10rem",
                }}
              />
              <h4 style={{ marginTop: "0.5rem" }}>
                SubTasks <SubTaskModal />
              </h4>
              <DataTable
                columns={columns}
                data={taskDetails.subTasks?.reverse()}
                highlightOnHover
                noHeader={true}
              />
            </Grid>
            <Grid item md={6}>
              <h4>comments</h4>

              <TextField
                margin="normal"
                fullWidth
                multiline
                name="comment"
                rows={4}
                onChange={handleComment}
                value={comment}
              ></TextField>
              <Button onClick={submitComment}>Comment</Button>
              <div style={{ height: "150px", overflowY: "scroll" }}>
                {taskDetails.comments
                  ?.slice(0)
                  .reverse()
                  .map((com, index) => (
                    <Paper
                      key={index}
                      style={{
                        marginTop: "10px",
                        width: "350px",
                        overflowWrap: "break-word",
                      }}
                      elevation={5}
                    >
                      <h4
                        style={{
                          fontSize: "20px",
                          margin: "0",
                          marginLeft: "5px",
                        }}
                      >
                        {com.userName}
                      </h4>
                      <h6
                        style={{
                          fontSize: "13px",
                          margin: "0",
                          marginLeft: "5px",
                        }}
                      >
                        {com.Date}({com.Time})
                      </h6>
                      <p style={{ marginTop: "10px", padding: "2px" }}>
                        {com.commentBody}
                      </p>
                    </Paper>
                  ))}
              </div>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default ViewSingleTask;

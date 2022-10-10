import * as React from "react";
import { Box, Button, Grid, Modal, Paper, TextField, Typography } from "@mui/material";
import api from "../../../api/axiosConfig";
import Loader from "../../loader/Loader";
import { useDispatch,useSelector } from "react-redux";
import {addComment} from "../../../features/task/taskActions"
import moment from "moment";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: 'auto',
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  margin:'auto'
};

const ViewSingleTask = ({ open, handleClose, taskId }) => {
  let user = JSON.parse(localStorage.getItem("userToken"));
  const [taskDetails,setTaskDetails] = React.useState({})
  const [loading,setLoading] = React.useState(false)
  const [comment,setComment] = React.useState('')
  const dispatch = useDispatch()
  const {singleTask} = useSelector((state)=>state.task)
  React.useEffect(() => {
    async function getTaskDetails() {
      setLoading(true);
      try {
        return await api
          .get(`getSingleTaskDetails/${taskId}`)
          .then((response) => {
            console.log(response.data);
            setTaskDetails(response.data);
            setLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    }

    getTaskDetails();
  }, [taskId, singleTask]);

  const handleComment = (event) =>{
      setComment(event.target.value)
  };

  const submitComment = () =>{
    console.log(comment,"comment")
    const commentData = {
      commentBody: comment,
      taskinfo: taskId,
      userName: user.name,
      Date: moment().format("DD-MM-YYYY"),
      Time: moment().format("hh:mm:ss"),
    };
    console.log(commentData, "body");
    dispatch(addComment(commentData))
    setComment('')

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
            Task Details
          </Typography>
          <Box>
            <Grid container>
              <Grid item style={{ marginRight: "120px" }}>
                <h4>Task Title</h4>
                <p>{taskDetails.taskTitle}</p>
                <h4>Task Description</h4>
                <p>{taskDetails.taskDescription}</p>
              </Grid>
              <Grid item>
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
                        style={{ marginTop: "10px", width: "285px",overflowWrap:"break-word" }}
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
                        <p style={{ marginTop: "10px", marginLeft: "5px" }}>
                          {com.commentBody}
                        </p>
                      </Paper>
                    ))}
                </div>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ViewSingleTask;

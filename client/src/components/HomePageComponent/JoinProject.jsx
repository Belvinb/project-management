import React from 'react'
import { Box, Button, Grid, Modal, Paper, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { joinProject } from '../../features/project/projectActions';



// modal for create and join project
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  margin: "auto",
  transform: "translate(-50%, -50%)",
  width: "auto",
  
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
};


const JoinProject = () =>{
  let user = JSON.parse(localStorage.getItem("userToken"));
  const dispatch = useDispatch();
  //join project
  const [openJoin, setOpenJoin] = React.useState(false);
  const handleJoinOpen = () => setOpenJoin(true);
  const handleJoinClose = () => setOpenJoin(false);

  //submit handler for join project
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm();

  //handler for join project
  const join = async (data) => {
    const joinDetails = {
      email: user.email,
      projectCode: data.join,
      userId: user._id,
    };
    handleJoinClose();
    dispatch(joinProject(joinDetails));
  };

  return (
    <>
      {/* join project modal */}
      <Modal
        open={openJoin}
        onClose={handleJoinClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={handleSubmit2(join)}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter invite code
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="join"
              name="join"
              autoFocus
              {...register2("join", { shouldValidate: true })}
            />
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Join
          </Button>
        </Box>
      </Modal>

      {/* join project logo and join button */}
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 2,
              width: 150,
              height: 150,
            },
          }}
        >
          <Paper className="paper1" elevation={8}>
            <img
              className="join"
              src={process.env.PUBLIC_URL + "images/joinProject.webp"}
              alt=""
            />
          </Paper>
        </Box>
        <Button variant="contained" onClick={handleJoinOpen}>
          Join a project
        </Button>
      </Grid>
    </>
  );
}

export default JoinProject
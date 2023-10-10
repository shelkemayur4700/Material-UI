// import { IconButton, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import ImageIcon from "@mui/icons-material/Image";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DateRangeIcon from "@mui/icons-material/DateRange";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "2px",
});

// const UserBox = styled
const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%-25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
          <Typography varient="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar src="" sx={{ width: 30, height: 30 }}></Avatar>
            <Typography fontWeight={500} variant="span">
              John doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-helperText"
            rows={3}
            multiline
            placeholder="whats on your mind"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={4}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>
          <ButtonGroup  fullWidth variant="contained" aria-label="outlined button group">
            <Button>Post</Button>
            <Button sx={{width:"100%"}}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;

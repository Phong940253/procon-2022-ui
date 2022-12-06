import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function DialogAnswer({ open, handleClose, data }) {
  return (
    <div>
      {" "}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Grid item>
              <b>Create Answer {data.id}</b>
            </Grid>
            <Grid item>
              <IconButton edge="end" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Stack>
            <Typography>Problem Data</Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography>Divided Data</Typography>
              <Button color="secondary" sx={{ textTransform: "capitalize" }}>
                Refresh
              </Button>
              <Button color="secondary" sx={{ textTransform: "capitalize" }}>
                Retrieve
              </Button>
            </Stack>
            <Typography>Answer Data</Typography>
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows={4}
              defaultValue="Default Value"
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Hủy
          </Button>
          <Button>Lưu</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

DialogAnswer.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  data: PropTypes.object,
};

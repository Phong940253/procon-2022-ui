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
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another

export default function DialogAnswer({ open, handleClose, dataQuestion }) {
  const [code, setCode] = React.useState(`[]`);
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
              <b>Create Answer {dataQuestion.name}</b>
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
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) => highlight(code, languages.js)}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
              }}
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
  dataQuestion: PropTypes.object,
};

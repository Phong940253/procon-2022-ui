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
import Chip from "@mui/material/Chip";
import Editor from "react-simple-code-editor";
import Box from "@mui/material/Box";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another
import axios from "axios";
import { saveAs } from "file-saver";
export default function DialogAnswer({
  open,
  handleClose,
  dataQuestion,
  host,
  headers,
  server,
}) {
  const [code, setCode] = React.useState("");
  const [probability, setProbability] = React.useState("");
  const [audioData, setAudioData] = React.useState([]);

  const handleGetAudio = (newType) => {
    if (dataQuestion === null) return;

    axios
      .post(
        `${host}/question/${dataQuestion.id}/divided-data`,
        {
          new: newType,
        },
        headers
      )
      .then((res) => {
        console.log(res.data.data);
        setAudioData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitAnswer = () => {};

  const getAudioBase64ById = (id, k) => {
    axios({
      url: `${host}/question/${dataQuestion.id}/audio/divided-data?uuid=${id}`,
      method: "GET",
      responseType: "blob",
      headers: headers.headers,
    })
      // .get(
      //   `${host}/question/${dataQuestion.id}/audio/divided-data?uuid=${id}`,
      //   headers
      // )
      // .then((response) => response.blob())
      .then((res) => {
        let fileName = `audio.wav`;
        const data = new FormData();
        data.append("wav", res.data, fileName);
        data.append("k", k);
        data.append("name", id);
        axios
          .post(`${server}/audio`, data, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((res) => {
            if (res.data.status === "success") {
              let data = JSON.stringify(res.data.indices);
              setCode(data);
              setProbability(JSON.stringify(res.data.values));
            }
          });
      });
  };

  React.useEffect(() => {
    handleGetAudio(false);
  }, [dataQuestion]);

  return (
    <div>
      {" "}
      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="sm">
        <DialogTitle>
          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Grid item>
              <b>Create Answer {dataQuestion && dataQuestion.name}</b>
            </Grid>
            <Grid item>
              <IconButton
                edge="end"
                onClick={() => {
                  handleClose();
                  setCode("");
                }}
              >
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
              <Button
                color="secondary"
                sx={{ textTransform: "capitalize" }}
                onClick={() => handleGetAudio(false)}
              >
                Refresh
              </Button>
              <Button
                color="secondary"
                sx={{ textTransform: "capitalize" }}
                onClick={() => handleGetAudio(true)}
              >
                Retrieve
              </Button>
            </Stack>
            <Stack spacing={1}>
              {audioData.map((item, index) => (
                <Stack key={index} direction="row" spacing={2}>
                  <Chip label={item} edge="end" />
                  <IconButton
                    onClick={() => {
                      getAudioBase64ById(item, dataQuestion.n_cards);
                    }}
                  >
                    <PlayArrowIcon />
                  </IconButton>
                </Stack>
              ))}
            </Stack>
            <Typography>Answer Data</Typography>
            <Box sx={{ border: "1px solid #e0e0e0", borderRadius: "4px" }}>
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
            </Box>
            <Typography>Probability</Typography>
            <Box sx={{ border: "1px solid #e0e0e0", borderRadius: "4px" }}>
              <Editor
                value={probability}
                onValueChange={(probability) => setProbability(probability)}
                highlight={(probability) =>
                  highlight(probability, languages.js)
                }
                padding={10}
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: 12,
                }}
              />
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose();
              setCode("");
            }}
            color="error"
          >
            Hủy
          </Button>
          {code ? <Button>Lưu</Button> : <Button disabled>Lưu</Button>}
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

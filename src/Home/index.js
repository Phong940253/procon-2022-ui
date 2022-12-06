import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import {
  CardHeader,
  Grid,
  Stack,
  Collapse,
  Button,
  Divider,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import axios from "axios";
import Question from "./Question";

const CardGetMatch = (props) => {
  const [open, setOpen] = React.useState(true);
  const [tournament, setTournament] = React.useState("");

  const handleClick = () => {
    setOpen(!open);
  };

  const headers = {
    headers: { Authorization: props.token },
  };

  let host = props.host;

  const handleGetAllMatch = () => {
    axios.get(host + "/match", headers).then((data) => {
      console.log(data.data);
      props.setMatch(data.data);
    });
  };
  return (
    <Card variant="outlined">
      <CardHeader
        title="MATCH"
        titleTypographyProps={{
          fontSize: "1.15rem",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
        action={open ? <ExpandLess /> : <ExpandMore />}
        onClick={handleClick}
        sx={{ cursor: "pointer" }}
      />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider variant="middle" />
        <CardContent>
          <Stack spacing={2}>
            <Button
              variant="outlined"
              onClick={handleGetAllMatch}
              sx={{ width: "fit-content", textTransform: "capitalize" }}
            >
              Get all match
            </Button>
          </Stack>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const CardGetRound = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Card variant="outlined">
      <CardHeader
        title="Round"
        titleTypographyProps={{
          fontSize: "1.15rem",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
        action={open ? <ExpandLess /> : <ExpandMore />}
        onClick={handleClick}
        sx={{ cursor: "pointer" }}
      />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider variant="middle" />
        <CardContent>
          <Stack spacing={2}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="ID Round"
              variant="outlined"
            />
            <Button
              variant="outlined"
              sx={{ width: "fit-content", textTransform: "capitalize" }}
            >
              Get Round
            </Button>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Thông tin chi tiết Round"
              variant="outlined"
            />
          </Stack>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const CardChallenge = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Card variant="outlined">
      <CardHeader
        title="Challenge"
        titleTypographyProps={{
          fontSize: "1.15rem",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
        action={open ? <ExpandLess /> : <ExpandMore />}
        onClick={handleClick}
        sx={{ cursor: "pointer" }}
      />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider variant="middle" />
        <CardContent>
          <Stack spacing={2}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="ID Challenge"
              variant="outlined"
            />
            <Button
              variant="outlined"
              sx={{ width: "fit-content", textTransform: "capitalize" }}
            >
              Get Challenge
            </Button>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Thông tin chi tiết Challenge"
              variant="outlined"
            />

            <Button
              variant="outlined"
              sx={{ width: "fit-content", textTransform: "capitalize" }}
            >
              Get submit Challenge
            </Button>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Thông tin câu trả lời cho Challenge"
              variant="outlined"
            />
          </Stack>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const Home = () => {
  const [host, setHost] = useState("");
  const [token, setToken] = useState("");
  const [server, setServer] = useState("");

  const [match, setMatch] = useState([]);

  return (
    <Grid container spacing={2} p={2} mt={6}>
      <Grid
        item
        xs={12}
        sm={4}
        pr={2}
        sx={(theme) => ({
          [theme.breakpoints.up("md")]: {
            overflowY: "scroll",
            height: "100vh",
          },
        })}
      >
        <Stack spacing={2}>
          <Card variant="outlined">
            <CardContent>
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Server"
                  variant="outlined"
                  value={server}
                  onChange={(e) => {
                    setServer(e.target.value);
                  }}
                />
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Host"
                  variant="outlined"
                  value={host}
                  onChange={(e) => {
                    setHost(e.target.value);
                  }}
                />
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Token"
                  variant="outlined"
                  value={token}
                  onChange={(e) => {
                    setToken(e.target.value);
                  }}
                />
              </Stack>
            </CardContent>
          </Card>
          <CardGetMatch
            server={server}
            host={host}
            token={token}
            setMatch={setMatch}
          />
          {/* <CardGetRound />
          <CardChallenge /> */}
        </Stack>
      </Grid>

      <Grid item xs={12} sm={8}>
        <Question />
      </Grid>
    </Grid>
  );
};

export default Home;

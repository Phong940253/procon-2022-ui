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
import Match from "./Match";

const CardGetMatch = ({ headers, server, host, setMatch }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleGetAllMatch = () => {
    axios.get(host + "/match", headers).then((data) => {
      console.log(data.data.data);
      setMatch(data.data.data);
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

const Home = () => {
  const [host, setHost] = useState("");
  const [token, setToken] = useState("");
  const [server, setServer] = useState("");

  const [match, setMatch] = useState([]);

  const headers = {
    headers: { Authorization: token },
  };

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
            headers={headers}
            setMatch={setMatch}
          />
        </Stack>
      </Grid>

      <Grid item xs={12} sm={8}>
        <Match
          setMatch={setMatch}
          match={match}
          server={server}
          host={host}
          headers={headers}
        />
      </Grid>
    </Grid>
  );
};

export default Home;

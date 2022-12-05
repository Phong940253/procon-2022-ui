import React from "react";
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

const CardGetTournament = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleGetAllTournament = () => {};
  return (
    <Card variant="outlined">
      <CardHeader
        title="Tournament"
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
              onClick={handleGetAllTournament}
              sx={{ width: "fit-content", textTransform: "capitalize" }}
            >
              Get all Tournament
            </Button>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Các Tournament của đội chơi"
              variant="outlined"
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="ID Tournament"
              variant="outlined"
            />
            <Button
              variant="outlined"
              sx={{ width: "fit-content", textTransform: "capitalize" }}
            >
              Get all Tournament
            </Button>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Thông tin chi tiết Tournament"
              variant="outlined"
            />
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

const CardGetMatch = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Card variant="outlined">
      <CardHeader
        title="Match"
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
              label="ID Match"
              variant="outlined"
            />
            <Button
              variant="outlined"
              sx={{ width: "fit-content", textTransform: "capitalize" }}
            >
              Get Match
            </Button>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Thông tin chi tiết Match"
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
  return (
    <Grid container spacing={2} p={2} mt={6}>
      <Grid
        item
        xs={12}
        sm={6}
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
                />
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Host"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Token"
                  variant="outlined"
                />
              </Stack>
            </CardContent>
          </Card>
          <CardGetTournament />
          <CardGetRound />
          <CardGetMatch />
          <CardChallenge />
        </Stack>
      </Grid>

      <Grid item xs={12} sm={6}></Grid>
    </Grid>
  );
};

export default Home;

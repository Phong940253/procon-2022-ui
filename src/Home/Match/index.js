import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

import Question from "../Question";
import PropTypes from "prop-types";

const dataMatch1 = [
  {
    id: 1,
    name: "Tran 1",
    description: "match1",
    is_active: true,
    createAt: "2022-08-29T08:13:23.000Z",
    updatedAt: "2022-08-29T08:13:23.000Z",
    round_id: 1,
    round: {
      id: 1,
      name: "Round1",
      description: "Vong 1",
      createdAt: "2022-08-29T07:39:11.000Z",
      updatedAt: "2022-08-29T07:39:11.000Z",
      tournament_id: 1,
      tournament: {
        id: 1,
        name: "Procon2022",
        description: "Procon2022 - HCMC",
        createdAt: "2022-08-29T07:38:46.000Z",
        updatedAt: "2022-08-29T07:38:46.000Z",
      },
    },
  },
  {
    id: 2,
    name: "Match 2",
    description: "Trận 2",
    is_active: false,
    createdAt: "2022-08-30T02:59:28.000Z",
    updatedAt: "2022-08-30T02:59:28.000Z",
    round_id: 2,
    teams: [],
    round: {
      id: 2,
      name: "Round 2",
      description: "Vòng 2",
      createdAt: "2022-08-30T02:57:17.000Z",
      updatedAt: "2022-08-30T02:57:17.000Z",
      tournament_id: 1,
      tournament: {
        id: 1,
        name: "Procon2022",
        description: "Procon2022 - HCMC",
        createdAt: "2022-08-29T07:38:46.000Z",
        updatedAt: "2022-08-29T07:38:46.000Z",
      },
    },
  },
];

const Match = ({ server, host, headers, match }) => {
  const [open, setOpen] = React.useState(false);
  const [dataMatch, setDataMatch] = React.useState(null);

  const handleClickOpen = (index) => {
    setDataMatch(dataMatch1[index]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={2}>
      {dataMatch1.map((item, index) => (
        <Grid item xs={6} sm={4} key={item.id}>
          <Card
            elevation={3}
            onClick={() => handleClickOpen(index)}
            sx={{ cursor: "pointer" }}
          >
            <CardHeader
              title={`Tran${item.id}`}
              action={item.is_active && <Chip label="Active" color="success" />}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Procon2022 - Round1
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
      <Question
        openDialogQuestion={open}
        hanldeCloseDialogQuestion={handleClose}
        dataMatch={dataMatch}
        server={server}
        host={host}
        headers={headers}
      />
    </Grid>
  );
};
export default Match;

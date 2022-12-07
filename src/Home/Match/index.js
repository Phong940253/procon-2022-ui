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

const Match = ({ server, host, headers, match }) => {
  const [open, setOpen] = React.useState(false);
  const [dataMatch, setDataMatch] = React.useState(null);

  const handleClickOpen = (index) => {
    setDataMatch(match[index]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={2}>
      {match.map((item, index) => (
        <Grid item xs={12} sm={6} key={item.id}>
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
                {item.round.tournament.name} - {item.round.name}
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

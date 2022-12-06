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
import PropTypes from "prop-types";
import DialogAnswer from "../Answer/DialogAnswer.js";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const dataQuestion = [
  {
    id: 1,
    cards: 1,
    parts: 1,
    bonusFactor: 1,
    penaltyPerChange: 2,
    pointPerCard: 22,
  },
  {
    id: 2,
    cards: 1,
    parts: 1,
    bonusFactor: 1,
    penaltyPerChange: 2,
    pointPerCard: 22,
  },
  {
    id: 3,
    cards: 1,
    parts: 1,
    bonusFactor: 1,
    penaltyPerChange: 2,
    pointPerCard: 22,
  },
  {
    id: 4,
    cards: 1,
    parts: 1,
    bonusFactor: 1,
    penaltyPerChange: 2,
    pointPerCard: 22,
  },
  {
    id: 5,
    cards: 1,
    parts: 1,
    bonusFactor: 1,
    penaltyPerChange: 2,
    pointPerCard: 22,
  },
  {
    id: 6,
    cards: 1,
    parts: 1,
    bonusFactor: 1,
    penaltyPerChange: 2,
    pointPerCard: 22,
  },
  {
    id: 7,
    cards: 1,
    parts: 1,
    bonusFactor: 1,
    penaltyPerChange: 2,
    pointPerCard: 22,
  },
];

const LabelChip = ({ title, content }) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography>{title}:</Typography>
      <Typography color="primary">
        <b>{content}</b>
      </Typography>
    </Stack>
  );
};

LabelChip.propTypes = {
  title: PropTypes.any,
  content: PropTypes.any,
};

const Question = ({
  openDialogQuestion,
  hanldeCloseDialogQuestion,
  question,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [data, setData] = React.useState(dataQuestion[0]);

  const handleSetData = (index) => {
    setData(dataQuestion[index]);
  };
  return (
    <Dialog
      open={openDialogQuestion}
      onClose={hanldeCloseDialogQuestion}
      fullScreen
    >
      <DialogTitle>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Grid item>
            <b>Câu hỏi</b>
          </Grid>
          <Grid item>
            <IconButton edge="end" onClick={hanldeCloseDialogQuestion}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          {dataQuestion.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <Card
                elevation={3}
                onClick={() => {
                  handleClickOpen();
                  handleSetData(index);
                }}
                sx={{ cursor: "pointer" }}
              >
                <CardHeader title={`Q_${item.id}`} />
                <CardContent>
                  <Grid container spacing={1}>
                    <Grid item>
                      <Chip
                        label={<LabelChip title="ID" content={item.id} />}
                      />
                    </Grid>
                    <Grid item>
                      <Chip
                        label={<LabelChip title="Cards" content={item.cards} />}
                      />
                    </Grid>
                    <Grid item>
                      <Chip
                        label={<LabelChip title="Parts" content={item.parts} />}
                      />
                    </Grid>
                    <Grid item>
                      <Chip
                        label={
                          <LabelChip
                            title="Bonus factor"
                            content={item.bonusFactor}
                          />
                        }
                      />
                    </Grid>
                    <Grid item>
                      <Chip
                        label={
                          <LabelChip
                            title="Penalty per change"
                            content={item.penaltyPerChange}
                          />
                        }
                      />
                    </Grid>
                    <Grid item>
                      <Chip
                        label={
                          <LabelChip
                            title="Point per card"
                            content={item.pointPerCard}
                          />
                        }
                      />
                    </Grid>
                  </Grid>
                  <Typography mt={2} gutterBottom>
                    <b>Start Time: </b>11/24/2022, 12:01:00 AM
                  </Typography>
                  <Typography>
                    <b>End Time: </b>11/24/2022, 12:01:00 AM
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <DialogAnswer open={open} handleClose={handleClose} data={data} />
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default Question;

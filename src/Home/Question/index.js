import React, { useEffect } from "react";
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
import axios from "axios";

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
  dataMatch,
  server,
  host,
  headers,
}) => {
  const [open, setOpen] = React.useState(false);
  const [question, setQuestion] = React.useState([]);
  const [dataQuestion, setDataQuestion] = React.useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSetData = (index) => {
    setDataQuestion(question[index]);
  };

  const getAllQuestionByMatch = (dataMatch) => {
    if (dataMatch != null) {
      axios
        .get(`${host}/question?match[eq_id]=${dataMatch.id}`, headers)
        .then((data) => {
          let dataQuestion = data.data.data;
          dataQuestion.map((item) => {
            const parse = JSON.parse(item.question_data);
            item.n_cards = parse.n_cards;
            item.n_parts = parse.n_parts;
            item.bonus_factor = parse.bonus_factor;
            item.penalty_per_change = parse.penalty_per_change;
            item.point_per_correct = parse.point_per_correct;
          });
          setQuestion(dataQuestion);
        });
    }
  };

  useEffect(() => {
    getAllQuestionByMatch(dataMatch);
    console.log(dataMatch);
  }, [dataMatch]);

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
          {question.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <Card
                elevation={3}
                onClick={() => {
                  handleClickOpen();
                  handleSetData(index);
                }}
                sx={{ cursor: "pointer" }}
              >
                <CardHeader title={item.name} />
                <CardContent>
                  <Grid container spacing={1}>
                    <Grid item>
                      <Chip
                        label={<LabelChip title="ID" content={item.id} />}
                      />
                    </Grid>
                    <Grid item>
                      <Chip
                        label={
                          <LabelChip title="Cards" content={item.n_cards} />
                        }
                      />
                    </Grid>
                    <Grid item>
                      <Chip
                        label={
                          <LabelChip title="Parts" content={item.n_parts} />
                        }
                      />
                    </Grid>
                    <Grid item>
                      <Chip
                        label={
                          <LabelChip
                            title="Bonus factor"
                            content={item.bonus_factor}
                          />
                        }
                      />
                    </Grid>
                    <Grid item>
                      <Chip
                        label={
                          <LabelChip
                            title="Penalty per change"
                            content={item.penalty_per_change}
                          />
                        }
                      />
                    </Grid>
                    <Grid item>
                      <Chip
                        label={
                          <LabelChip
                            title="Point per card"
                            content={item.point_per_correct}
                          />
                        }
                      />
                    </Grid>
                  </Grid>
                  <Typography mt={2} gutterBottom>
                    <b>Start Time: </b>
                    {new Date(item.start_time).toLocaleString()}
                  </Typography>
                  <Typography>
                    <b>End Time: </b>
                    {new Date(item.end_time).toLocaleString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <DialogAnswer
            open={open}
            handleClose={handleClose}
            dataQuestion={dataQuestion}
          />
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default Question;

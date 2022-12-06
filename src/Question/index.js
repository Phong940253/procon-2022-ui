import React from "import";
import { Grid, Card, CardContent, CardHeader } from "@mui/material";

const dataMatch = [
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
];

const Question = () => {
  return (
    <Grid container>
      {dataMatch.map((item, index) => {
        return (
          <Grid item>
            <Card elevetion={3}>
              <CardHeader title={`Q_${item.id}`} />
            </Card>
          </Grid>
        );
      })}
      <Grid item></Grid>
    </Grid>
  );
};
export default Question;

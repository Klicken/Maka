import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  message: {
    textAlign: "center",
  }
});

export default function Home() {
  const classes = useStyles();

  return (
    <div>
        <Typography variant="h5" className={classes.message}>This homepage needs something huh</Typography>
    </div>
  );
}

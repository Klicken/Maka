import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  message: {
    textAlign: "center",
  }
});

export default function NotFound() {
  const classes = useStyles();

  return (
    <div>
        <Typography variant="h5" className={classes.message}>Page not found</Typography>
    </div>
  );
}

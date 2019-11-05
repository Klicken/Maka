import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(3, 0),
    flex: "none",
    textAlign: "center"
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography color="textSecondary" variant="caption">@Martin Karlsson</Typography>
    </footer>
  );
}

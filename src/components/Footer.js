import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import pyramids from "../resources/pyramids.svg"

const useStyles = makeStyles(theme => ({
  footer: {
    paddingTop: "20px",
    flex: "none",
    textAlign: "center",
  },
  pyramids: {
    height: "15%",
    position: "fixed",
    right: "0",
    bottom: "0",  
    zIndex: -1
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography color="textSecondary" variant="caption">@Martin Karlsson</Typography>
      <img src={pyramids} className={classes.pyramids} alt=""/>
    </footer>
  );
}

import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import SimpleSlider from "./Slider";

const useStyles = makeStyles({
  slider: {
    padding: "10px",
    marginLeft: "auto !important",
    marginRight: "auto !important"
  }
});

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.slider}>
        <Typography variant="overline">Projects I've participated in</Typography>
        <SimpleSlider />
      </div>
    </div>
  );
}

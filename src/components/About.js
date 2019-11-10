import React from "react";
import { Typography } from "@material-ui/core";
import SimpleSlider from "./Slider";

export default function About() {
  return (
    <React.Fragment>
      <h3>Hi, I'm Martin!</h3>
      <p></p>
      <Typography variant="overline">Projects I've participated in</Typography>
      <SimpleSlider />
    </React.Fragment>
  );
}

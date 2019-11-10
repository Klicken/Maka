import React from "react";
import { LocationOn, LinkedIn, Mail, GitHub } from "@material-ui/icons";
import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  link: {
    display: "flex",
    alignItems: "center"
  },
  wrapper: {
    justifyContent: "center"
  }
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <List className={classes.wrapper}>
      <ListItem
        button
        component="a"
        href="mailto:martinmkarlsson@hotmail.com"
        className={classes.link}
      >
        <ListItemIcon>
          <Mail />
        </ListItemIcon>
        <ListItemText>martinmkarlsson@hotmail.com</ListItemText>
      </ListItem>
      <ListItem
        button
        component="a"
        href="https://linkedin.com/in/martin-karlsson-9b9566b2"
        className={classes.link}
      >
        <ListItemIcon>
          <LinkedIn />
        </ListItemIcon>
        <ListItemText primary="LinkedIn" />
      </ListItem>
      <ListItem
        button
        component="a"
        href="https://github.com/Klicken"
        className={classes.link}
      >
        <ListItemIcon>
          <GitHub />
        </ListItemIcon>
        <ListItemText primary="GitHub" />
      </ListItem>
      <ListItem className={classes.link}>
        <ListItemIcon>
          <LocationOn />
        </ListItemIcon>
        <ListItemText primary="Gothenburg, Sweden" />
      </ListItem>
    </List>
  );
}

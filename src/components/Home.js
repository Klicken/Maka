import React from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles({
  message: {
    textAlign: "center",
    marginBottom: "20px"
  },
  links: {
    flex: 1,
    display: "flex",
    justifyContent: "center"
  },
  link: {
    margin: "5px",
  }
});

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3" className={classes.message}>
        HEY!
      </Typography>
      <Typography variant="h5" className={classes.message}>
        Welcome to my site, this homepage needs something huh
      </Typography>
      <Typography variant="subtitle1" className={classes.message}>
        Meanwhile, checkout the other links
      </Typography>
      <div className={classes.links}>
          <Button
            href="/blog"
            size="small"
            color="inherit"
            variant="outlined"
            className={classes.link}
          >
            Blog
          </Button>
          <Button
            href="/about"
            size="small"
            color="inherit"
            variant="outlined"
            className={classes.link}
          >
            About
          </Button>
          <Button
            href="/contact"
            size="small"
            color="inherit"
            variant="outlined"
            className={classes.link}
          >
            Contact
          </Button>
        </div>
    </div>
  );
}

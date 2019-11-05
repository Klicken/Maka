import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Button, Box, Link } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textAlign: "center"
  },
  bar: {
    borderBottom: `1px solid ${theme.palette.primary.light}`
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Toolbar className={classes.bar}>
      <Button
        href="/about"
        color="primary"
        className={classes.links}
        size="small"
      >
        About
      </Button>
      <Box letterSpacing={3} className={classes.title}>
        <Link href="/" color="primary" underline="none">
          <h3>MARTIN KARLSSON</h3>
        </Link>
      </Box>

      <Button href="/contact" color="primary" variant="outlined" size="small">
        Contact
      </Button>
    </Toolbar>
  );
}

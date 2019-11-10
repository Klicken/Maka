import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  Drawer,
  Toolbar,
  Button,
  Link,
  Hidden
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import logo from "../resources/logo.svg";

const useStyles = makeStyles(theme => ({
  logo: {
    display: "flex",
    textAlign: "left",
    alignItems: "center"
  },
  logoIcon: {
    width: "40px",
    marginRight: "10px"
  },
  bar: {
    borderBottom: `1px solid grey`
  },
  right: {},
  left: {
    flexGrow: 1,
    display: "flex",
    alignItems: "flex-start"
  },
  list: {
    width: "250px"
  }
}));

export default function Header() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer("right", false)}
    >
      <List>
        <ListItem button component="a" href="/about">
          <ListItemText primary={"About"} />
        </ListItem>
        <ListItem button component="a" href="/blog">
          <ListItemText primary={"Blog"} />
        </ListItem>
        <ListItem button component="a" href="/contact">
          <ListItemText primary={"Contact"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Toolbar className={classes.bar}>
      <div className={classes.left}>
        <Link
          href="/"
          color="inherit"
          underline="none"
          variant="h4"
          className={classes.logo}
        >
          <img src={logo} alt="" className={classes.logoIcon} />
          <b>MAKA</b>
        </Link>
      </div>
      <Hidden xsDown>
        <div className={classes.right}>
          <Button href="/about" size="small">
            About
          </Button>
          <Button href="/blog" size="small">
            Blog
          </Button>
          <Button href="/contact" variant="outlined" size="small">
            Contact
          </Button>
        </div>
      </Hidden>
      <Hidden smUp>
        <div>
          <Menu onClick={toggleDrawer("right", true)}></Menu>
        </div>
      </Hidden>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideList}
      </Drawer>
    </Toolbar>
  );
}

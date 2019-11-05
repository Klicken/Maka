import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../css/App.css";
import { makeStyles, Container } from "@material-ui/core";
import Header from "./Header";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Footer from "./Footer";

const useStyles = makeStyles({
  container: {
    flex: 1
  },
  divider: {
    marginTop: "20px"
  }
});

export default function App() {
  const classes = useStyles();

  return (
    <Fragment>
      <Router>
        <Container className={classes.container}>
          <Header />
          <div className={classes.divider}></div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Container>
        <Footer />
      </Router>
    </Fragment>
  );
}

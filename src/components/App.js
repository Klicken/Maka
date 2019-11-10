import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles, Container } from "@material-ui/core";
import Header from "./Header";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Footer from "./Footer";
import NotFound from "./NotFound";
import Blog from "./Blog";

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    fontFamily: theme.typography.fontFamily,
  },
  content: {
    padding: "24px"
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <Fragment>
      <Router>
        <Container className={classes.container}>
          <Header />
          <div className={classes.content}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path='*' exact={true} component={NotFound} />
          </Switch>
          </div>
        </Container>
        <Footer />
      </Router>
    </Fragment>
  );
}

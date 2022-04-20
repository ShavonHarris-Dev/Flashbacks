import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import useStyles from "./styles";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Auth from "./components/auth/Auth";

const App = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Container maxWidth="lg" className={classes.container}>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth" exact component={Auth} />
          </Switch>
        </div>
        <Footer />
      </Container>
    </BrowserRouter>
  );
};

export default App;

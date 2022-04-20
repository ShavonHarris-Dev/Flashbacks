import React from "react";
import { AppBar, Link, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography variant="body1" color="inherit">
        Created by{" "}
        <Link color="primary" href="https://github.com/ShavonHarris-Dev">
          Shavon Harris
        </Link>{" "}
        using MERN Stack.
      </Typography>
      <Typography variant="body1" color="inherit">
        <Link href="https://github.com/ShavonHarris-Dev" color="secondary">
          <GitHubIcon className={classes.icon} />
        </Link>
      </Typography>
    </AppBar>
  );
};

export default Footer;

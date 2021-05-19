import {
  AppBar,
  Toolbar,
  Typography,
  createStyles,
  makeStyles
} from "@material-ui/core";

import { Link } from "react-router-dom";

import React from "react";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flex: 1
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3)
    }
  })
);

function Page({ title, children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Link to="/onboarding">Onboarding</Link>
      </AppBar>
      <div className={classes.content}>{children}</div>
    </div>
  );
}

export default Page;

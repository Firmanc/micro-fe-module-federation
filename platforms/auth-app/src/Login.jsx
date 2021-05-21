import {
  Box,
  Typography,
  makeStyles,
  TextField,
  Button,
  Card,
} from "@material-ui/core";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch
} from "react-router-dom";

import React from "react";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  form: {
    display: 'grid',
    gridRowGap: '30px',
    maxWidth: '500px',
    margin: '0 auto',
  },
  buttonWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridColumnGap: '2rem',
  },
  button: {
    height: '3rem',
    width: '100%'
  },
}));

export default function TabsComponent() {
  const classes = useStyles();
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const { path: rootPath } = match;

  const handleChange = (newValue) => {
    history.push(newValue);
  };

  return (
    <div className={classes.root}>
      <Switch>
        <Route path={rootPath} exact={true}>
          <Redirect to={`${rootPath}/login`} />
        </Route>
        <Route path={`${rootPath}/login`}>
          <form
            className={classes.form}
            noValidate
            autoComplete="off"
            onSubmit={(event) => {
              event.preventDefault();
              handleChange(`${rootPath}/dashboard`);
            }}
          >
            <TextField id="standard-basic" label="Email" type="email" />
            <TextField id="standard-basic" label="Password" type="password" />
            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
          </form>
        </Route>
        <Route path={`${rootPath}/dashboard`}>
         <div className={classes.buttonWrapper}>
            <Card>
              <button
                className={classes.button}
                onClick={() => { handleChange('/job-corridor') }}
              >
                Job Corridor
              </button>
            </Card>
            <Card>
              <button
                className={classes.button}
                onClick={() => { handleChange('/job-profiles') }}
              >
                Job Profiles
              </button>
            </Card>
            <Card>
              <button
                className={classes.button}
                onClick={() => { handleChange('/onboarding') }}
              >
                  Onboarding
                </button>
            </Card>
         </div>
        </Route>
      </Switch>
    </div>
  );
}

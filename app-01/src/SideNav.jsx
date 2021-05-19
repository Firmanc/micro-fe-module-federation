import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
  createStyles,
  makeStyles,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import React from "react";

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: {
      ...theme.mixins.toolbar,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

export default function SideNav() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar}>
        <Typography variant="h6">SideNav</Typography>
      </div>
      <Divider />
      <List>
        <ListSubheader>Demo Pages</ListSubheader>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Main" />
        </ListItem>
        <ListItem button component={Link} to="/ui-library">
          <ListItemText primary="UI Library" />
        </ListItem>
        <ListItem button component={Link} to="/dialog">
          <ListItemText primary="Dialog" />
        </ListItem>
        <ListItem button component={Link} to="/svelte">
          <ListItemText primary="Svelte Page" />
        </ListItem>
        <ListItem button component={Link} to="/routing/foo">
          <ListItemText primary="Routing" />
        </ListItem>
      </List>
    </Drawer>
  );
}

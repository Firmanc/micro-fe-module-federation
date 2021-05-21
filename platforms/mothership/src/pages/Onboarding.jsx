import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import loadApp from "onboarding/loadApp";
import NavLayout from "../layouts/NavLayout";

const useStyles = makeStyles(() => ({
  root: {
    '& > *': {
      margin: '16px',
      width: 200,
    },
  },
}));

const SveltePage = () => {
  const [name, setName] = React.useState("federation");
  const mountEl = React.useRef();
  const classes = useStyles();

  React.useEffect(() => {
    if (mountEl.current.innerHTML.length === 0) {
      loadApp("app_04", name);
    }
  })


  const handleChange = (e) => {
    setName(e.target.value);
    const event = new CustomEvent("change-name", {
      detail: {
        name: e.target.value
      },
      bubbles: true,
      cancelable: true,
      composed: true // makes the event jump shadow DOM boundary
    });
    let source = e.target || e.srcElement;
    source.dispatchEvent(event);
  }

  return (
    <NavLayout>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Name" value={name} onChange={(e) => handleChange(e)} />
        <div id="app_04" ref={mountEl}></div>
      </form>
    </NavLayout>
  )
}


export default SveltePage;
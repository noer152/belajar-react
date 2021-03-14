import { Avatar } from "@material-ui/core";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
function ConditionalRendering() {
  const classes = useStyle();
  const kondisi = false;
  const nama = "soerjo";

  return (
    <div>
      {kondisi ? (
        <Avatar alt={nama} src="/broken-image.jpg" className={classes.orange} />
      ) : (
        <Avatar
          alt="Bujank"
          src="/broken-image.jpg"
          className={classes.purple}
        />
      )}
    </div>
  );
}

export default ConditionalRendering;

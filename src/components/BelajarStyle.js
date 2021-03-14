import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  marginAutoContainer: {
    width: 500,
    height: 80,
    display: "flex",
    backgroundColor: "gold",
  },
  marginAutoItem: {
    margin: "auto",
  },
  alignItemsAndJustifyContent: {
    width: 500,
    height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
  },
}));

function BelajarStyle() {
  const classes = useStyles();
  return (
    <div>
      <Button
        m="auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        variant="contained"
        color="default"
      >
        Teken nih tombol!
      </Button>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={500}
        height={80}
        bgcolor="lightblue"
      >
        <Box>1. Box (Margin: Auto)</Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={500}
        height={80}
        bgcolor="lightgreen"
        justifyItems="center"
      >
        2.Box (alignItems and justifyContent)
      </Box>
      <div className={classes.marginAutoContainer}>
        <div className={classes.marginAutoItem}>3. useStyle (margin: auto)</div>
      </div>
      <div className={classes.alignItemsAndJustifyContent}>
        4. useStyle (alignItems and justifyContent)
      </div>
    </div>
  );
}

export default BelajarStyle;

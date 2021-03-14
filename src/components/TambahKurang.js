import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

const styles = theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      display: "inline",
      component: "div",
    },
  },
});

class TambahKurang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      angka: 0,
    };
  }

  handleTambah = () => {
    this.setState({ angka: this.state.angka + 1 });
  };

  handleKurang = () => {
    this.setState({ angka: this.state.angka - 1 });
  };
  render() {
    const { classes } = this.props;
    return (
      <Box
        className={classes.root}
        // bgcolor="text.disabled"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Button onClick={this.handleKurang} variant="outlined" color="primary">
          -
        </Button>
        <Typography variant="h6">{this.state.angka}</Typography>
        <Button onClick={this.handleTambah} variant="outlined" color="primary">
          +
        </Button>
      </Box>
    );
  }
}

export default withStyles(styles)(TambahKurang);

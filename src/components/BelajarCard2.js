import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const useStyle = theme => ({
  root: {
    minWidth: 500,
    margin: 10,
    // display: "flex",
    // alignContent: "center",
    // justifyContent: "center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class BelajarCard2 extends Component {
  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            variant="subtitle1"
            color="textSecondary"
            gutterBottom
          >
            Nama Lengkap:
          </Typography>
          <Typography variant="h5" component="h2">
            {bull}
            {this.props.nama}
          </Typography>
          <Typography
            className={useStyle.pos}
            color="textSecondary"
            gutterBottom
          >
            Status: {this.props.status}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(useStyle)(BelajarCard2);

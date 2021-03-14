import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles({
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

export default function BelajarCard(props) {
  const classes = useStyle();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Nama Lengkap:
        </Typography>
        <Typography variant="h5" component="h2">
          {bull}
          {props.nama}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Status: {props.status}
        </Typography>
        <Typography variant="body2" component="p">
          Makhluk asli bumi yang perlu di perhatikan wahai bujank.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Detail</Button>
      </CardActions>
    </Card>
  );
}

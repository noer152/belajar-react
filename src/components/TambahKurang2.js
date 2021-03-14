import { Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  root: {
    alignContent: "center",
    justifyContent: "center",
    padding: "20px",
  },
  content: {
    margin: "10px",
  },
});

export default function TambahKurang2() {
  const [angka, setAngka] = useState(0);
  const classes = useStyle();

  const handleKurang = () => {
    if (angka > 0) {
      setAngka(angka - 1);
    }
  };

  const handleTambah = () => {
    setAngka(angka + 1);
  };

  return (
    <Box className={classes.root} display="flex">
      <Button
        className={classes.content}
        onClick={handleKurang}
        variant="contained"
        color="secondary"
      >
        -
      </Button>
      <Typography className={classes.content} variant="h5">
        {angka}
      </Typography>
      <Button
        className={classes.content}
        onClick={handleTambah}
        variant="contained"
        color="secondary"
      >
        +
      </Button>
    </Box>
  );
}

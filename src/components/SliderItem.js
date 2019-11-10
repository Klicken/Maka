import React from "react";
import {
  makeStyles,
  Typography,
  Card,
  CardContent,
  CardMedia
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    margin: 10
  },
  media: {
    height: 180
  }
}));

export default function SliderItem(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={props.image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.desc}
        </Typography>
        <br />
        <Typography variant="caption" color="textPrimary" component="p">
          {props.tech}
        </Typography>
      </CardContent>
    </Card>
  );
}

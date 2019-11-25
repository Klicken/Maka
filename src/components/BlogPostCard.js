import React from "react";
import {
  makeStyles,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Hidden
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  cardArea: {
    marginTop: "24px"
  },
  card: {
    display: "flex"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
}));

export default function BlogPostCard(props) {
  const classes = useStyles();

  return (
    <CardActionArea component="a" href={props.link} className={classes.cardArea}>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="h2" variant="h5">
              {props.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {props.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {(props.content).substring(0, 100) + "..."}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
        </div>
        {props.image && (
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={props.image} />
          </Hidden>
        )}
      </Card>
    </CardActionArea>
  );
}

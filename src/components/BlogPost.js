import React, { useState, useEffect } from "react";
import { makeStyles, Typography, Divider, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  titleBar: {
    flex: 1,
    display: "flex"
  },

  right: {},
  left: { flexGrow: 1 },
  divider: { marginBottom: "20px" },
  content: {
    padding: "20px"
  }
}));

export default function BlogPost(props) {
  const classes = useStyles();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchPost(id) {
    setIsLoading(true);
    const res = await fetch(process.env.REACT_APP_POST_API_URL + "?id=" + 1);
    const post = await res.json();
    setPost(post.Item);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchPost(props.id);
  }, [props.id]);

  return (
    <React.Fragment>
      {isLoading ? (
        <React.Fragment>
          <Typography variant="h6">Loading...</Typography>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className={classes.titleBar}>
            <Typography variant="h6" gutterBottom className={classes.left}>
              {post.title.S}
            </Typography>
            <Typography variant="h6" gutterBottom className={classes.right}>
              {post.date.S}
            </Typography>
          </div>
          <Divider className={classes.divider} />
          <Paper className={classes.content}>
            <div>
              <Typography variant="body1" style={{ whiteSpace: "pre-line" }}>
                {post.content.S}
              </Typography>
            </div>
          </Paper>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

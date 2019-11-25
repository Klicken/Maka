import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Paper,
  Divider,
  Grid,
  Typography
} from "@material-ui/core";
import BlogPostCard from "./BlogPostCard";

const useStyles = makeStyles(theme => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[100]
  },
  archives: {
    marginTop: "24px"
  },
  post: {
    padding: theme.spacing(2)
  }
}));

export default function Blog() {
  const classes = useStyles();

  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchPosts() {
    setIsLoading(true);
    const res = await fetch(process.env.REACT_APP_POSTS_API_URL);
    const posts = await res.json();
    setPosts(posts);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Grid container spacing={5} className={classes.mainGrid}>
      <Grid item xs={12} md={8}>
        <Typography variant="h6" gutterBottom>
          Blog
        </Typography>
        <Divider />
        {isLoading || posts == null || posts.Items === undefined ? (
          <Typography>Oops, there are no posts here.</Typography>
        ) : (
          posts.Items.map(post => (
            <BlogPostCard
              className={classes.post}
              title={post.title}
              date={post.date}
              content={post.content}
              link={"/blog/" + post.id}
              key={post.id}
            />
          ))
        )}
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={0} className={classes.sidebarAboutBox}>
          <Typography variant="h6" gutterBottom>
            About
          </Typography>
          <Typography>
            This blog is dedicated to my everyday ideas, and the stuff that I'm
            working on.
            <br />
            <br />
            Primarily though, it's just a project to test React and AWS out.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

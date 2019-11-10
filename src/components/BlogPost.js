import React from "react";
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

function fetchPostData(id) {
  return {
    id: 1,
    title: "A blog I guess?",
    date: "Nov 10",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    content:
      "So, for some reason I decided to create a blog/portfolio/personal website. I thought it would be a fun project to try out React a bit more than I had previously done and also to take a look at the features that AWS has to offer. " +
      "\n\n The project took me about 2 weeks where I mostly worked on it on the weekend. I should probably have spent less time on fixing small design things that bugged me but here we are. I also spent quite a bit of effort making it responsive to work on phones and tablets and I believe that it is now but I might be wrong." +
      "\n\n Using create-react-app and Material UI it was very easy to get something decently looking up and running in an instant and I would highly recommend them. Atleast if you're creating smaller projects."
  };
}

function buildPost(json) {
  return (
    <div>
      <Typography variant="body1" style={{ whiteSpace: "pre-line" }}>
        {json.content}
      </Typography>
    </div>
  );
}

export default function BlogPost(props) {
  const classes = useStyles();

  const postData = fetchPostData(props.id);
  const content = buildPost(postData);

  return (
    <React.Fragment>
      <div className={classes.titleBar}>
        <Typography variant="h6" gutterBottom className={classes.left}>
          {postData.title}
        </Typography>
        <Typography variant="h6" gutterBottom className={classes.right}>
          {postData.date}
        </Typography>
      </div>
      <Divider className={classes.divider} />
      <Paper className={classes.content}>{content}</Paper>
    </React.Fragment>
  );
}

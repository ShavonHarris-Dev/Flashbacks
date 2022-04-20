import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId, setCreatePost }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={12} md={12}>
          <Post
            post={post}
            setCurrentId={setCurrentId}
            setCreatePost={setCreatePost}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;

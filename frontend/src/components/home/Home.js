import React, { useState, useEffect } from "react";
import { Container, Grow, Grid, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { getPosts } from "../../actions/postsActions";

import Posts from "../posts/Posts";
import Form from "../form/Form";

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const [createPost, setCreatePost] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  });

  return (
    <div>
      <Grow in>
        <Container>
          <Grid item xs={12} sm={12} style={{ justifyContent: "center" }}>
            <div className={classes.div}>
              <Button
                variant="contained"
                color="primary"
                justify="center"
                onClick={() =>
                  setCreatePost((prevCreatePost) => !prevCreatePost)
                }
                className={classes.button}
              >
                {createPost ? "Cancel" : "Create Post"}
              </Button>
            </div>
            {createPost && (
              <Form
                className={classes.form}
                currentId={currentId}
                setCurrentId={setCurrentId}
                setCreatePost={setCreatePost}
              />
            )}
          </Grid>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={12}>
              <Posts
                setCurrentId={setCurrentId}
                setCreatePost={setCreatePost}
              />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
};

export default Home;

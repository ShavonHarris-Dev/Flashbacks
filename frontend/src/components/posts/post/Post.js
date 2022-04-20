import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import moment from "moment";
import { useDispatch } from "react-redux";

import { likePost, deletePost } from "../../../actions/postsActions";
import useStyles from "./styles";

const Post = ({ post, setCurrentId, setCreatePost }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  const Likes = () => {
    if (post.likes && post.likes.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  return (
    <>
      <Card className={classes.card}>
        <div>
          <div className={classes.title}>
            <Typography variant="h6">{post.name}</Typography>
            <Typography variant="body2" className={classes.time}>
              {moment(post.createdAt).fromNow()}
            </Typography>
          </div>
        </div>
        <div className={classes.detailContainer}>
          <div className={classes.cardmedia}>
            <CardMedia
              className={classes.media}
              image={
                post.selectedFile ||
                "https://user-images.githubusercontent.com/64483658/113504121-9fc14600-9553-11eb-921a-3a65002bfc03.jpg"
              }
              title={post.title}
            />
          </div>
          <CardContent className={classes.cardcontent}>
            <Typography gutterBottom variant="h6" component="h2">
              {post.title}
            </Typography>
            <Typography variant="body2" color="primary" component="p">
              {post.message}
            </Typography>
            <div>
              <Typography variant="body2" color="secondary" component="h2">
                {post.tags.map((tag) => `${tag} `)}
              </Typography>
            </div>
          </CardContent>
        </div>
        <CardActions className={classes.cardActions}>
          <Button
            size="small"
            color="primary"
            disabled={!user?.result}
            onClick={() => dispatch(likePost(post._id))}
          >
            <Likes />
          </Button>
          {(user?.result?.googleId === post?.creator ||
            user?.result?._id === post?.creator) && (
            <div>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  setCurrentId(post._id);
                  setCreatePost(true);
                }}
              >
                <EditIcon fontSize="default" />
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => dispatch(deletePost(post._id))}
              >
                <DeleteIcon fontSize="small" />
              </Button>
            </div>
          )}
        </CardActions>
      </Card>
    </>
  );
};

export default Post;

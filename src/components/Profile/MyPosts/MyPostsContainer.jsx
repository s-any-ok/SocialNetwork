import React from "react";
import {
  onPostChangeActionCreator,
  addPostActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  const state = props.store.getState();

  const addPost = () => {
    let action = addPostActionCreator();
    props.store.dispatch(action);
  };

  const onPostChange = (text) => {
    let action = onPostChangeActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      addPost={addPost}
      onPostChange={onPostChange}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;

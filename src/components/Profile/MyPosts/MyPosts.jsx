import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";

const MyPosts = (props) => {
  const postsElements = props.profilePage.posts.map((p) => (
    <Post id={p.id} message={p.message} likes={p.likes} />
  ));

  const addNewPost = (data) => {
    props.addPost(data.postText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <MyPostsReduxForm onSubmit={addNewPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Enter your message"
          name="postText"
          component="textarea"
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const MyPostsReduxForm = reduxForm({ form: "myPosts" })(MyPostsForm);

export default MyPosts;

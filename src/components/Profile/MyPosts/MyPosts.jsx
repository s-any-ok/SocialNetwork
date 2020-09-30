import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm } from "redux-form";
import {
  maxLengthConstructor,
  required,
} from "../../../utils/validators/validators";
import { createForm, Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthConstructor(10);
const MyPosts = React.memo(({ profilePage, addPost }) => {
  const postsElements = profilePage.posts.map((p) => (
    <Post id={p.id} message={p.message} likes={p.likes} />
  ));

  const addNewPost = (data) => {
    addPost(data.postText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <MyPostsReduxForm onSubmit={addNewPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

const MyPostsForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createForm("Enter your message", "postText", Textarea, [
        required,
        maxLength10,
      ])}

      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const MyPostsReduxForm = reduxForm({ form: "myPosts" })(MyPostsForm);

export default MyPosts;

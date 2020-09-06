import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postsElements = props.profilePage.posts.map((p) => (
    <Post id={p.id} message={p.message} likes={p.likes} />
  ));

  const postInfo = React.createRef();

  const onAddPost = () => {
    props.addPost();
  };

  const onPostTextChange = () => {
    const text = postInfo.current.value;
    props.onPostChange(text);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            ref={postInfo}
            onChange={onPostTextChange}
            value={props.profilePage.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;

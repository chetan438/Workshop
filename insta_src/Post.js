import React from 'react';
import './Post.css';

function Post1() {
  return (
    <div className="post">
      <div className="post__header">
        <img
          className="post__avatar"
          src="/images/user.jpg"
          alt="User Avatar"
        />
        <span className="post__username">Marvel_maharaju</span>
      </div>
      <img
        className="post__image"
        src="/images/post1.jpg"
        alt="Post"
      />
      <div className="post__footer">
        <i className="fas fa-heart" title="Like"></i>
        <i className="fas fa-comment" title="Comment"></i>
        <i className="fas fa-paper-plane" title="Share"></i>
      </div>
    </div>
  );
}
function Post2() {
    return (
      <div className="post">
        <div className="post__header">
          <img
            className="post__avatar"
            src="/images/user.jpg"
            alt="User Avatar"
          />
          <span className="post__username">Marvel_maharaju</span>
        </div>
        <img
          className="post__image"
          src="/images/post2.jpg"
          alt="Post"
        />
        <div className="post__footer">
          <i className="fas fa-heart" title="Like"></i>
          <i className="fas fa-comment" title="Comment"></i>
          <i className="fas fa-paper-plane" title="Share"></i>
        </div>
      </div>
    );
  }
  function Post(){
    return (
        <div>
            <Post1 />
            <Post2 />
        </div>
    )
  }

export default Post;

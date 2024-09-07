import React from 'react';
import Post from './Post';
import './Feed.css';

function Feed() {
  return (
    <div className="feed">
      <div className="feed__posts">
        <Post />
        {/* Add more <Post /> components as needed */}
      </div>
    </div>
  );
}

export default Feed;

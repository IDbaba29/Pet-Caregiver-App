import "./post.css"
import React from 'react';
import { Link } from "react-router-dom"

function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && (
        <img
          className="postImg"
          src={PF + post.photo}
          alt=""
        />
      )}
      <div className="postInfo">
        <div className="postCats"> {
          post.categories.map((c) => (
            <span className="postCat" key={post.id}>{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`}> <span className="postTitle"> {post.title} </span></Link>

        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
        {post.descPet}
      </p>
      <p className="postDesc">
        {post.descCargiv}
      </p>

    </div>
  )
}

export default Post;
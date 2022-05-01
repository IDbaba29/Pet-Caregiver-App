import React from 'react';
import "./posts.css";
import Post from '../post/Post';


function Posts({posts}) {
  return (
      <div className='posts'>
        {posts.map( p => (
            <Post post ={p} key={posts.id} />
        )

        )}
                
      </div>
    
  )
}

export default Posts;
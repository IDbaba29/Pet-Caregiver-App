import "./post.css"

function Post() {
  return (
    <div className="post">
        
        <img 
            className="postImg"
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="" 
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">DOG</span>
                <span className="postCat">CAT</span>
            </div>

            <span className="postTitle">
                Lorem ipsum dolor sit amet!
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Praesentium, illo vel? Nemo expedita ipsam facilis ut, esse beatae dolorum vel? 
            Harum laboriosam dignissimos veritatis est? Assumenda itaque iste quia obcaecati.
        </p>

    </div>
  )
}

export default Post;
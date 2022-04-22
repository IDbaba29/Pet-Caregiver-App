import "./singlepost.css"


function Singlepost() {
      
   
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
               
                    <img
                        className="singlePostImg"
                        src=""
                        alt=""
                    />
                
            </div>
            <h1 className="singlePostTitle">
                P Lorem ipsum dolor sit amet consectetur.
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>

            <div className="singlePostInfo">
                <span className='singlePostAuthor'>
                    Author/Full name: <b>Idongesit Akwaowoh</b>
                 </span>

                 <span className='singlePostAuthor'>Years of Experience:<b>5</b> </span>

                <span className='singlePostDate'>Last seen:<b> 1 hour ago</b></span>

                
            </div>
            
            <p className='singlePostDesc'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Debitis repellendus velit amet numquam corrupti labore iusto nostrum,
                 harum pariatur nesciunt enim veniam.
                Numquam at nobis quibusdam voluptas! Eaque, assumenda dolores.
            </p>
            <div className="btn">
                <button>Contact : <b>Idongesit Akwaowoh</b></button>
                <button> Drop a review for Idongesit</button>
            </div>

           
        </div>
    )
}

export default Singlepost;
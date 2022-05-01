import React from 'react';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router';
import "./singlepost.css"
import { Link } from "react-router-dom";
import { Context } from "../../context/Context"



function Singlepost() {

    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [post, setPost] = useState({})
    const PF = "http://localhost:5000/images/";
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [descPet, setDescPet] = useState("");
    const [descCargiv, setDescCargiv] = useState("");
    const [updateMode, setupdateMode] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path)
            setPost(res.data)
            setTitle(res.data.title)
            setDescPet(res.data.descPet)
            setDescCargiv(res.data.descCargiv)
        };
        getPost()
    }, [path])

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id} `,
                { data: { username: user.username } });
            window.location.replace("/");
        } catch (err) { }

    };

    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id} `, {
                username: user.username,
                title,
                descPet,
                descCargiv
            });
            // window.location.reload();
            setupdateMode(false)
        } catch (err) { }
    };

    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                {post.photo && (
                    <img src={PF + post.photo} alt="" className="singlePostImg" />
                )}
                {
                    updateMode ? (<input type="text"
                        value={title}
                        className="singlePostTitleInput"
                        autoFocus
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    ) : (

                        <h1 className="singlePostTitle">
                            {title}
                            {post.username === user?.username && (

                                <div className="singlePostEdit">
                                    <i className="singlePostIcon fa-regular fa-pen-to-square"
                                        onClick={() => setupdateMode(true)}>
                                    </i>
                                    <i className="singlePostIcon fa-regular fa-trash-can"
                                        onClick={handleDelete}>
                                    </i>
                                </div>
                            )}
                        </h1>
                    )
                }

                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>
                        Author/Full name:
                        <Link to={`/caregivpage/?user=${post.username}`} className="link"><b>{post.username}</b></Link>

                    </span>

                    <span className='singlePostAuthor'>Years of Experience:<b>{post.experience}</b> </span>

                    <span className='singlePostDate'>Created on:<b>{new Date(post.createdAt).toDateString()}</b></span>


                </div>
                <div className='description'>
                    {
                        updateMode ? (<textarea className='singlePostDescInput'
                            value={descPet}
                            onChange={(e) => setDescPet(e.target.value)}
                        />
                        )
                            :
                            (<p className='singlePostDesc'>
                                {descPet}
                            </p>
                            )
                    }

                    {
                        updateMode ? (<textarea className='singlePostDescInput'
                            value={descCargiv}
                            onChange={(e) => setDescCargiv(e.target.value)} />
                        )
                            :
                            (<p className='singlePostDesc'>
                                {descCargiv}
                            </p>
                            )
                    }

                </div>
                {updateMode && (
                    <button className="singlepostButton" onClick={handleUpdate}>Update post</button>
                )}
            </div>
        </div>
    )
}

export default Singlepost;
import React, { useContext, useState } from 'react';
import "./write.css"
import axios from "axios";
import { Context } from "../../context/Context"


function Write() {
    const [title, setTitle] = useState("");
    const [experience, setExperience] = useState("");
    const [descPet, setDescPet] = useState("");
    const [descCargiv, setDescCargiv] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            experience,
            descPet,
            descCargiv,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post("/upload", data);
            } catch (err) { }

        }
        try {
            const res = await axios.post("/posts", newPost);
            window.location.replace("/post/" + res.data._id);

        } catch (err) { }

    };

    return (
        <div className='write'>
            {file && (
                <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
            )}




            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">

                    <label htmlFor="fileInput"><i className="writeIcon fas fa-plus"></i></label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                        onChange={e=>setFile(e.target.files[0])}
                    />
                    <div className='titleExp'>
                    <input
                        type="text"
                        placeholder="Enter your title"
                        className="writeInput titexp"
                        autoFocus={true}
                        onChange={e=>setTitle(e.target.value)}

                    />
                    <input
                        type="text"
                        placeholder="Experience e.g 5"
                        className="writeInput titexp"
                        autoFocus={true}
                        onChange={e=>setExperience(e.target.value)}

                    />
                    </div>
                    
                </div>

                <div className="writeFormGroup">
                    <textarea
                        className="writeText writeInput"
                        placeholder="Describe your pet.."
                        type="text"
                        autoFocus={true}
                        onChange={e=>setDescPet(e.target.value)}
                    >
                    </textarea>

                    <textarea
                        className="writeText writeInput"
                        placeholder="Describe your dream pet caregiver.."
                        type="text"
                        autoFocus={true}
                        onChange={e=>setDescCargiv(e.target.value)}
                     >
                    </textarea>
                </div>
                <button className="writeSubmit" type="submit">Publish</button>
            </form>
        </div>
    )
}

export default Write;
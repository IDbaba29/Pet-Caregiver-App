import "./write.css"



function Write() {
   
    return (
        <div className='write'>
           

                <img 
                    className="writeImg" 
                    src="https://images.pexels.com/photos/1123999/pexels-photo-1123999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                />
         

            <form className="writeForm" >
                <div className="writeFormGroup">

                    <label htmlFor="fileInput"><i className="writeIcon fas fa-plus"></i></label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                        />

                    <input
                        type="text"
                        placeholder="Title"
                        className="writeInput"
                        autoFocus={true}
                        
                    />
                </div>

                <div className="writeFormGroup">
                    <textarea
                        className="writeText writeInput"
                        placeholder="Describe your pet.."
                        type="text"
                        autoFocus={true}
                    >
                    </textarea>

                    <textarea 
                        className="writeText writeInput"
                        placeholder="Describe your dream pet caregiver.."
                        type="text">

                    </textarea>
                </div>
                <button className="writeSubmit" type="submit">Publish</button>
            </form>
        </div>
    )
}

export default Write;
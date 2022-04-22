import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

function Settings() {
    return (

        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your account</span>
                    <span className="settingsDeleteTitle">Delete account</span>
                </div>
                <form className="settingsForm">
                    <label >Profile Picture</label>
                    <div className="settingsPP">
                        <img
                            className="settingsImg"
                            src="https://images.pexels.com/photos/3047413/pexels-photo-3047413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="ProfilePics"
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                    </div>
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" />

                    <label>Username</label>
                    <input type="text" placeholder="JohnnyDeep" />

                    <label>Email</label>
                    <input type="email" placeholder="example@gmail.com" />

                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />

        </div>
    )
}

export default Settings;
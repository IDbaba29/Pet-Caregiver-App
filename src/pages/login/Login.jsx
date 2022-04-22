import './login.css'
import { Link } from 'react-router-dom';


function Login() {



  return (
    <div className='login'>
      <div className="loginWrapper">
        <span className="loginTitle">Login</span>
        <form className='loginForm'  >
          <label>Username</label>
          <input className='loginInput'
            type="text"
            placeholder="Enter your username...."

          />

          <label>Password</label>
          <input className='loginInput'
            type="password"
            placeholder="Enter your password...."

          />

          <button className="loginButton" type='submit' ><Link className="link" to="/login">Log In</Link></button>
        </form>

        <button className="loginRegisterButton">
          <Link className="link" to="/register">REGISTER</Link>
        </button>
      </div>

    </div>
  )
}

export default Login;
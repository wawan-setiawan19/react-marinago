import React, { useState } from 'react';
import "../assets/loginpage.css"
import logo from '../images/logo.png';

const Login = ({onLogin}) => {
    const [isVisible, setIsVisible] = useState(false)
    const [isWrong, setIsWrong] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleVisible = () => {
        setIsVisible(!isVisible)
    }

    const handleChange = (e, type) => {
        if(type === 'username'){
            setUsername(e.target.value)
        }
        if(type === 'password'){
            setPassword(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsWrong(false)
        if(password !== 'admin' || username !== 'admin'){
            setIsWrong(true)
        }
        onLogin()
    }

  return (
    <div className="login-container">
      <div className="welcome-section">
        <img
          src={logo}
          alt="Logo Kebun Jambu Marina"
          className="logo"
        />
        <h1>Selamat Datang!</h1>
        <p>
          Kebun Jambu Marina menawarkan berbagai kegiatan seru dan edukatif untuk
          semua kalangan. Mulai dari memetik jambu merah segar langsung dari
          kebunnya, berkuda mengelilingi perkebunan yang asri, hingga berburu
          spot foto instagramable di antara hamparan hijau yang mempesona.
        </p>
      </div>
      <div className="login-section">
        <h2>Log In</h2>
        <p>
          Sudah punya akun? <a href="/signup">Sign Up</a>
        </p>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Username" value={username} onChange={(e) => handleChange(e, 'username')}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input type={isVisible ? 'text' : 'password'} id="password" name="password" placeholder="********" value={password} onChange={(e)=>handleChange(e, 'password')}/>
              <button type="button" className="toggle-visibility" onClick={handleVisible}>👁️</button>
            </div>
          </div>
          {isWrong && <span style={{color: 'red'}}>Username atau Password Salah</span>}
          <button className="login-button" onClick={handleSubmit}>Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

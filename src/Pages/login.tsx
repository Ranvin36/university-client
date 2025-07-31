import axios from 'axios';
import './login.css';

import {useState} from 'react'
import { server } from '../server.ts';

const Login:React.FC = () => {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  async function loginClick(){
    try{
      const data ={username,password}
      console.log(data)
      const response = await axios.post(`${server}/auth/login`,data)
      console.log(response)
    }
    catch(error){
      console.log(error)
    }

  }

  console.log(server)

  return (
    <div className="login-page">
      <div className="login-container">
          <div className="header">
            <div className="logo">
              <img src="./images/logo.png" alt="" />
            </div>
            <div className="heading">
              <h3>WSO2 HR</h3>
            </div>
          </div>
          <div className="input-container">
              <h1>Login To The WSO2 Management System</h1>
              <div className="input-field">
                <h3>Enter Your Username</h3>
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="input-field">
                <h3>Enter Your Password</h3>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className="input-field forgot-password">
                <a href="">Forgot Password?</a>
              </div>
          </div>
          <div className="login-btn" onClick={loginClick}>
            <a href="#">Login To WSO2</a>
          </div>
      </div>
    </div>
  );
}
export default Login;
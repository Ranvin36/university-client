import axios from 'axios';
import './login.css';

import {useState} from 'react'
import { server } from '../server.ts';
import { getData, saveData } from '../localStorage.tsx';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/ui/Spinner.tsx';
import React from 'react';

const Login:React.FC = () => {
  const navigate = useNavigate()
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [isLoading,setisLoading] = useState(false)
  async function loginClick(){
    try{
      setisLoading(true)
      const data ={username,password}
      const response = await axios.post(`${server}/auth/login`,data);
      const token = await saveData({token: response.data.token});
      navigate("/dashboard")
    }
    catch(error){
      console.log(error)
    }
    setisLoading(false)

  }

  console.log(server)

  return (
    <div className="login-page">
      <div className="login-container">
          <div className="header">
            <div className="logo">
              <img src="./images/logo.png" alt="" />
            </div>
          </div>
          <div className="input-container">
              <h1>Login To The Highridge Institute Management System</h1>
              <div className="input-field">
                <h3>Enter Your Username</h3>
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="input-field">
                <h3>Enter Your Password</h3>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
              </div>
          </div>
          {isLoading ? 
          
          <div className="login-btn">
            <Spinner color="#000"/>
          </div>
          :          
            <div className="login-btn" onClick={loginClick}>
              <a href="#">Login To Highridge</a>
            </div>
          }
      </div>
    </div>
  );
}
export default Login;
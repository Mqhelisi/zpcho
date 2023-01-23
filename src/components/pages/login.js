import React, { useState } from 'react';
// import loginImg from "../../login.svg";
import PropTypes from 'prop-types';
import './login.css';
import '../Adder.css'

async function loginUser(credentials) {
    return fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }



export default function Login({setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
      }
      
        return (
        
        <div className='form-box'>
            <h1 align="center" >Login</h1>
            <div className='login-wrapper'>
                <div className='image'>
                    {/* <img src={loginImg}/> */}
                </div>
            <form onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label htmlFor='username'>Username</label>
                                <input type='text' name='username' placeholder='username' onChange={e => setUserName(e.target.value)}/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password'>Password</label>
                                <input type='password' name='password' placeholder='password' onChange={e => setPassword(e.target.value)}/>
                                
                            </div>
                            <div>
                            <button type="submit">Submit</button>
                            </div>
            </form>
            </div>
            
        </div>)
    
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }
import React, { useState } from 'react'
import '../style/login.css'
import { useNavigate } from 'react-router-dom';
import ApiEnd from './Service/AuthService';

export default function Login() {
  const [username ,setuserName]=useState('');
  const [password ,setPassword]=useState('');

  const navigate = useNavigate();
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    const response =Login({
      username,
      password
    });
    if ('accessToken' in response) {
      console.log("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      })
      .then((value) => {
        localStorage.setItem('accessToken', response['accessToken']);
        localStorage.setItem('user', JSON.stringify(response['user']));
        navigate('/dashbored')
      });
    } else {
      alert("Failed", response.message, "error");
    }
  
          
  }
 
  return (
    <div className= 'container'>

    <form className='form' onSubmit={handleSubmit}>
    <h2 className='h2'>Sing In</h2>
      <label htmlFor="username">userName</label>
      <input
        type="text"
        id="username"
        value={username}
       onChange={e=>{setuserName(e.target.value)}}
        required
        className='input'
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={e=>{setPassword(e.target.value)}}
        required
        className='input'
      />
      <button type="submit" className='button'>
        Login
      </button>
    </form>
  </div>
  )
}

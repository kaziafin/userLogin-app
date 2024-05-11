import React, { useState } from 'react'
import '../style/login.css'

export default function Login() {
  const [username ,setuserName]=useState('');
  const [password ,setPassword]=useState('');

  const navigate = Navigator;
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(username==="admin" && password==="admin"){
      navigate('/dashbored')
    }
          
  }
 
  return (
    <div className= 'container'>

    <form className='form' onSubmit={handleSubmit}>
    <h2 className='h2'>Sing In</h2>
      <label htmlFor="username">userName</label>
      <input
        type="email"
        id="username"
        value={username}
        onChange={e=>(e.target.username)}
        required
        className='input'
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={e=>(e.target.password)}
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

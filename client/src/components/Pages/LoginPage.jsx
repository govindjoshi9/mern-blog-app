import React from 'react'

export default function LoginPage() {
  return (
    <form className='login'>
      <h1>Login</h1>
      <input type="text"  placeholder='User Name' />
      <input type="text" placeholder='Password'  />
      <button>Login</button>
    </form>
  )
}

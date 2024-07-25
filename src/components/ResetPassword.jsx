import Axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ResetPassword = () => {
    const [password,setPassword] = useState("")
    const {token} = useParams()
    const navigate = useNavigate()
    const handleSubmit=(e)=>{
      e.preventDefault()
      Axios.post(`http://localhost:8080/auth/reset-password/${token}`,{password})
        .then(response=>{
          if (response.data.status){
            navigate('/login')
          }
          console.log(response.data);
      }).catch(err=>{
                console.log(err)
        })}
  return (
    <div className="signup-container">
      <center>
        <h2>Forgot-Password</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor="password">New Password:</label>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <br />
          <button type="submit">Reset</button>
        </form>
      </center>
    </div>
  )
}

export default ResetPassword
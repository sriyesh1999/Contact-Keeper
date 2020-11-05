import React,{useState} from 'react'
import {Link} from 'react-router-dom'
const Login = () => {
    const [user,setUser]=useState({
       
        email:'',
        password:'',

    })
    const {email,password}=user
    const onChange=e=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit=e=>{
        e.preventDefault()
        console.log('login submit')
    }
    return (
        <div className="form-container">
            <h1>
                Account <span className="text-dark">Login</span>
            </h1>
            <form onSubmit={onSubmit}>
               
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' value={password} onChange={onChange} />
                </div>
                
                <input type="submit" value="login" class="btn btn-dark btn-block"/>
                
            </form>
        
            <h4><strong>New User ?</strong> <Link to='/register'style={{color: 'dark'}} >Register Here</Link></h4>
        </div>
    )
}

export default Login

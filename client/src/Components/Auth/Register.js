import React,{useState,useContext,useEffect} from 'react'
import AlertContext from '../../Context/Alert/alertContext'
import AuthContext from '../../Context/Auth/authContext'
const Register = (props) => {
    const alertContext =useContext(AlertContext)
    const auth=useContext(AuthContext)
    const {register,error,clearErrors,isAuthenticated} =auth
    const {SetAlert}=alertContext
    useEffect(()=>{
        if(isAuthenticated){
            props.history.push('/')
        }
        if(error==='user exists'){
            SetAlert(error,'danger')
            clearErrors()
        }
        //eslint-disable-next-line
    },[error,isAuthenticated,props.history])
    const [user,setUser]=useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })
    const {name,email,password,password2}=user
    const onChange=e=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit=e=>{
        e.preventDefault()
        if(name===''||email===''||password===''){

            SetAlert('Please enter all fields','danger')

        }
        else if(password!==password2){
            SetAlert('Passwords do not match','danger')
        }
        else{
            register({
                name,email,password
            })
        }
    }
    return (
        <div className="form-container">
            <h1>
                Account <span className="text-dark">Register</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' autocomplete="name" value={name} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' value={email} onChange={onChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password'  autocomplete="new-password" value={password} onChange={onChange} required minLength="6"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" name='password2'  autocomplete="new-password2" value={password2} minLength="6" required onChange={onChange} />
                </div>
                <input type="submit" value="register" class="btn btn-dark btn-block"/>
                
            </form>
            
        </div>
    )
}

export default Register

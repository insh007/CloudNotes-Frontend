import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const Login =  (props) => {
    const {host} = props

    const [credentials, setCredentials] = useState({email:"", password:""})
    
    let history = useHistory()

    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // API call
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        })
        const json = await response.json()
        // console.log(json)
        if(json.status){
            // save the auth token and redirect
            localStorage.setItem('token', json.token)
            props.showAlert("Logged in successful", "success")
            history.push('/')  // redirect
        }else{
            props.showAlert("Invalid credentials", "danger")
        }
    }

    return (
        <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
            <h2>Login to continue to CloudNotes</h2>
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name='email' aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} id="password" name='password' />
                </div>
                <button type="submit" className="btn btn-primary btn-sm" >Submit</button>
            </form>
        </div>
    )
}

export default Login

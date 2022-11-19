import React, {useState} from 'react'
import './SignUp.css'

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [disabled, setDisabled] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        if(e.target.value !== passwordConfirm){
            setDisabled(true)
        }else if(passwordConfirm !== '' && e.target.value !== ''){
            setDisabled(false)
        }
        console.log(password, disabled)
    }

    const handlePasswordConfirm = (e) => {
        setPasswordConfirm(e.target.value)
        if(e.target.value !== password){
            setDisabled(true)
        }else if(e.target.value !== '' && password !== ''){
            setDisabled(false)
        }
        console.log(passwordConfirm, disabled)
    }

  return (
    <>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} className='form'>
            <label className="input">
                Username:
                <input type="text" placeholder="Enter username..." value={username} onChange={handleUsername} required/>
            </label>
            <label className="input">
                Email:
                <input type="email" placeholder="Enter email..." value={email} onChange={handleEmail} required/>
            </label>
            <label className="input">
                Password:
                <input type="password" placeholder="Enter password..." value={password} onChange={handlePassword} required/>
            </label>
            <label className="input">
                Password Confirmation:
                <input type="password" placeholder="Enter password confirmation..." value={passwordConfirm} onChange={handlePasswordConfirm} required/>
            </label>
            <button disabled={disabled}>Sign Up</button>
        </form>
    </>
  )
}

export default SignUp
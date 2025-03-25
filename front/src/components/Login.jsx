import React, { useState} from "react";
import { useNavigate } from "react-router";
import axios from 'axios';
import classes from'../styles/Login.module.css';
const Login = () =>{
    let navigate = useNavigate();
    const [formStatus,setFormStatus] = useState('Login');
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');

    const togleFormStatus = () =>{
        setFormStatus(formStatus === 'Login' ? 'Register' : 'Login');
    }
    const formSubmit = (e) =>
    {
        e.preventDefault();
        const url = formStatus === 'Login' 
        ? 'http://127.0.0.1:8000/auth/token/login/' 
        : 'http://127.0.0.1:8000/api/users/'
        const data = {
            username,
            password,
            ...(formStatus === 'Register' && {email}),
        };
        axios.post(url, data,{
            headers:{
                "Content-Type":"application/json",
            }
        })
        .then(response => {
            if(formStatus === 'Login'){
                localStorage.setItem("token",response.data['auth_token']);  
                navigate("/");
            }
            else{
                setMessage("Success Registration!");
                setFormStatus('Login');
            }
        })
        .catch(error => {
            if(formStatus === 'Login' ? 
                setMessage('Incorrect login or password!') : 
                setMessage('Username alredy exists'));
        });
    };
    return(
        <>
            <div class={classes.form_wrapper}>
                {message != '' ? (
                    <>  
                        <div className={classes.message}>
                            {message}
                        </div>
                    </>
                ):null}
                <div class={classes.form_avatar}>
                    <img src="images/user.svg" alt=""/>
                </div>
                <h2 onClick={togleFormStatus}>
                    {formStatus === 'Login' ? 'Create Account?' : 'Have account?'}
                    </h2>
                <form action="" onSubmit={formSubmit}>
                    <input 
                    type="text" 
                    placeholder="Username"
                    value={username}
                    onChange={e=> setUserName(e.target.value)}/>
                    <input 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={e=> setPassword(e.target.value)}/>
                    {formStatus === 'Register' ? (
                        <>
                            <input 
                            type="text" 
                            placeholder="Email"
                            value={email}
                            onChange={e=> setEmail(e.target.value)}/>
                        </>
                    ):null}
                    <button onClick={formSubmit} type="submit">
                        {formStatus}
                    </button>
                </form>
            </div>
        </>
    )
};
export default Login;
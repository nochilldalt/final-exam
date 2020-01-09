import * as React from 'react'
import { useState } from 'react';
import { json, setLogin } from '../utils/api-services';
import { RouteComponentProps } from 'react-router-dom';

const Register: React.FC<RegisterProps> = (props) => {

    const[name, setName] = useState<string>('')
    const[email, setEmail] = useState<string>('')
    const[password, setPassword] = useState<string>('')
    
    async function handleSignUp() {
        try {
            let info: any = await json('/auth/register', 'POST', {
                name,
                email,
                password
            })
            
            setLogin(info.token, info.userid, info.role)
            console.log(setLogin)
            props.history.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
        <h1>Register Page</h1>
        <br />
            <input placeholder="Name" type="text" name="name" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
            <br />
            <input placeholder="E-Mail" type="email" name="email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
            <br />
            <input placeholder="Password" type="password" name="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
            <br />
            <button  onClick={handleSignUp}>Sign Up</button>
        </div>
    )
}

interface RegisterProps extends RouteComponentProps{}

export default Register
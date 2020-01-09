import * as React from 'react'
import { useState, useEffect } from 'react';
import { User, json, setLogin } from '../utils/api-services';
import { RouteComponentProps } from 'react-router';

const Login: React.FC<LoginProps> = (props) => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    useEffect(() => {
        if (User && User.role === 'admin') {
            props.history.push('/')
        }
    })

    async function handleLogin(){
        try {
            let info:any = await json('/auth/login', 'POST',{
                name, email, password
            })
            setLogin(info.token, info.userid, info.role)
            props.history.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Login Page</h1>
            <br/>
            <input type="text" placeholder="name" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
            <br />
            <input type="text" placeholder="email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
            <br />
            <input type="password" placeholder="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
            <br />
            <button onClick={handleLogin} >login</button>
        </div>
    )
}

interface LoginProps extends RouteComponentProps { }

export default Login
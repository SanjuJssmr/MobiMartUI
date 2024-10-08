import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'
import { sendToast } from '../utils/common'
import logo from "../assets/logo.png"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { email, password }
        let response = await fetch('http://localhost:9000/users/login', {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        response = await response.json()

        if (response.status === 1) {
            localStorage.setItem("token", response.token)
            localStorage.setItem("role", response.role)
            localStorage.setItem("userId", response.userId)
            sendToast(response.response)
            if (response.role === 1) {
                return navigate(`/home`)
            } else {
                return navigate(`/addProduct`)
            }
        }
        sendToast(response.response)
    }

    return (
        <div className="flex sm:flex-row flex-col w-full h-screen items-center pt-7 sm:pb-0 pb-10 justify-center font-mono gap-5 sm:gap-32">
            <img src={logo} alt="img" className="w-44 sm:w-60" />
            <section className="flex flex-col gap-5 border-[1px] p-7 border-gray-400  w-[300px] sm:w-[400px]  rounded-md">
                <h1 className="text-2xl">Login</h1>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="outline-none border-b-[1px] border-gray-400 pb-2" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="outline-none border-b-[1px] border-gray-400 pb-2" />
                <button onClick={handleSubmit} className="bg-amber-500 text-white py-2 rounded-md font-semibold uppercase">Sign in</button>
                <p className='text-[11px] sm:text-sm text-gray-500'>Don't have a account?  Please<Link to="/register" className="text-indigo-500 font-semibold"> Sign up*</Link></p>
            </section>
        </div>
    )
}

export default Login
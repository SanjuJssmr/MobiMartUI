import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Login from './Login'
import { sendToast } from '../utils/common'
import logo from "../assets/logo.png"
import { BeatLoader } from 'react-spinners'

const Register = () => {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const user = { userName, email, password, city, state }
        let response = await fetch('http://localhost:9000/users/register', {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        response = await response.json()
        if (response.status === 1) {
            navigate(`/verifyotp/${response.userId.toString()}`)
            setLoading(false);
            return sendToast(response.response)
        }
        setLoading(false);
        return sendToast(response.response)
    }
    return (
        <div className="flex w-full h-screen items-center pt-7 justify-center font-mono gap-40">
            <img src={logo} alt="img" width={300} />
            <section className="flex flex-col gap-5 border-[1px] p-7 border-gray-400  rounded-md">
                <h1 className="text-2xl">Create Account</h1>
                <input disabled={loading} type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="First and last name" className="outline-none border-b-[1px] border-gray-400 pb-2" />
                <input disabled={loading} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="outline-none border-b-[1px] border-gray-400 pb-2" />
                <input disabled={loading} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password-must be at least 6 characters" className="outline-none border-b-[1px] border-gray-400 pb-2" />
                <input disabled={loading} type="text" value={city} placeholder="City" onChange={(e) => setCity(e.target.value)} className="outline-none border-b-[1px] border-gray-400 pb-2" />
                <input disabled={loading} type="text" value={state} placeholder="State" onChange={(e) => setState(e.target.value)} className="outline-none border-b-[1px] border-gray-400 pb-2" />
                <button disabled={loading} onClick={handleSubmit} className="bg-amber-500 py-2 rounded-md font-semibold uppercase">{loading ? <BeatLoader /> : "Verify email"}</button>
                <p>Already have a account?  Please<Link to="/login" className="text-indigo-500 font-semibold"> Sign in*</Link></p>
            </section>
        </div>
    )
}

export default Register
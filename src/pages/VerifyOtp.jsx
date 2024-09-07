import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { sendToast } from '../utils/common'
import logo from "../assets/logo.png"

const VerifyOtp = () => {
    const [otp, setOtp] = useState("")
    const params = useParams();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { otp }
        console.log(params.id);
        let response = await fetch(`http://localhost:9000/users/verifyOtp/${params.id}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        response = await response.json()
        if (response.status === 1) {
            navigate("/login")
            return sendToast(response.response)
        }
        return sendToast(response.response)
    }
    return (
        <div className="flex w-full h-screen items-center pt-7 justify-center font-mono gap-40">
            <img src={logo} alt="img" width={300} />
            <section className="flex flex-col gap-5 border-[1px] p-7 border-gray-400  rounded-md">
                <h1 className="text-2xl">Verify your email</h1>
                <input value={otp} onChange={(e) => setOtp(e.target.value)} type="text" placeholder="Enter your otp" className="outline-none border-b-[1px] border-gray-400 pb-2" />
                <button onClick={handleSubmit} className="bg-amber-500 py-2 rounded-md font-semibold uppercase">Verify OTP</button>
                <p>Already have a account?  Please<a href="#" className="text-indigo-500 font-semibold"> Sign in*</a></p>
            </section>
        </div>
    )
}

export default VerifyOtp
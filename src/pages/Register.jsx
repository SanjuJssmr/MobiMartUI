import React from 'react'
import { Link } from "react-router-dom"
import Login from './Login'
const Register = () => {
    return (
        <div className ="flex w-full h-screen items-center pt-7 flex-col font-mono">
            <h1 className="text-3xl font-bold mb-5">MobiMart</h1>
            <section className="flex flex-col gap-5 border-[1px] p-7 border-gray-400  rounded-md">
                <h1 className="text-2xl">Create Account</h1>
                <input type="text" placeholder="First and last name" className="outline-none border-b-[1px] border-gray-400 pb-2" />
                <input type="email" placeholder="Email address" className="outline-none border-b-[1px] border-gray-400 pb-2"/>
                <input type="password" placeholder="Password-must be at least 6 characters" className="outline-none border-b-[1px] border-gray-400 pb-2" />
                <input type="text" placeholder="City" className="outline-none border-b-[1px] border-gray-400 pb-2"/>
                <input type="text" placeholder="State" className="outline-none border-b-[1px] border-gray-400 pb-2"/>
                <button className="bg-amber-500 py-2 rounded-md font-semibold uppercase">Verify email</button>
                <p>Already have a account?  Please<Link to="/login" className="text-indigo-500 font-semibold"> Sign in*</Link></p>
            </section>
        </div>
    )
}

export default Register
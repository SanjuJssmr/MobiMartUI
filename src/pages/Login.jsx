import React from 'react'
import { Link } from "react-router-dom"
const Login = () => {
    return (
        <div className="flex w-full h-screen items-center justify-center flex-col font-mono">
            <h1 className="text-3xl font-bold mb-5">MobiMart</h1>
            <section className="flex flex-col gap-5 border-[1px] p-7 border-gray-400  rounded-md">
                <h1 className="text-2xl">Login</h1>
                <input type="email" placeholder="Email address" className="outline-none border-b-[1px] border-gray-400 pb-2" />
                <input type="password" placeholder="Password" className="outline-none border-b-[1px] border-gray-400 pb-2" />
                <button className="bg-amber-500 py-2 rounded-md font-semibold uppercase">Sign in</button>
                <p>Don't have a account?  Please<Link to="/register" className="text-indigo-500 font-semibold"> Sign up*</Link></p>
            </section>
        </div>
    )
}

export default Login
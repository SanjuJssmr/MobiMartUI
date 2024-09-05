import React from 'react'

const VerifyOtp = () => {
    return (
        <div className="flex w-full h-screen items-center justify-center flex-col font-mono">
            <h1 className="text-3xl font-bold mb-5">MobiMart</h1>
            <section className="flex flex-col gap-5 border-[1px] p-7 border-gray-400  rounded-md">
                <h1 className="text-2xl">Verify your email</h1>
                <input type="text" placeholder="Enter your otp" className="outline-none border-b-[1px] border-gray-400 pb-2" />
                <button className="bg-amber-500 py-2 rounded-md font-semibold uppercase">Verify OTP</button>
                <p>Already have a account?  Please<a href="#" className="text-indigo-500 font-semibold"> Sign in*</a></p>
            </section>
        </div>
    )
}

export default VerifyOtp
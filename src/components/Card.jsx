import React from 'react'
import m35 from "../assets/m35.jpg"
const Card = () => {
  return (
    <div className="flex shadow-md shadow-gray-400 flex-col items-center justify-center p-3 rounded-md w-[250px]">
        <img src={m35} alt="img" width={130} />
        <h1 className="text-xl font-semibold pt-3">M35Galaxy</h1>
        <h3 className="text-md font-semibold text-gray-400">Samsung</h3>
        <h3 className="text-2xl">INR 20000/-</h3>
        <button className="py-3 bg-[#00BFFF] rounded-md w-full mt-3">Add to card</button>
    </div>
  )
}

export default Card
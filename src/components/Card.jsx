import React from 'react'
import m35 from "../assets/m35.jpg"
const Card = ({ prod }) => {
  return (
    <div className="flex shadow-md shadow-gray-400 flex-col items-center justify-center p-3 rounded-md w-[250px]">
      <img src={prod.image} alt="img" width={130} className="h-44"/>
      <h1 className="text-xl font-semibold pt-3">{prod.prodName}</h1>
      <h3 className="text-md font-semibold text-gray-400">{prod.brand}</h3>
      <h3 className="text-2xl">INR {prod.price}/-</h3>
      <p>Available Qty: {prod.quantity}</p>
      <button className="py-3 bg-[#f59e0b] rounded-md w-full mt-3">Add to card</button>
    </div>
  )
}

export default Card
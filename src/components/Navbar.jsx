import React, { useEffect, useState } from 'react'
import logo from "../assets/navlogo.png"
import { useNavigate } from "react-router-dom"
import { sendToast } from '../utils/common'
import { RiLogoutCircleLine } from "react-icons/ri";

const Navbar = () => {
  const navigate = useNavigate();
  const [card, setCard] = useState(0)

  const getUserById = async () => {
    const userId = localStorage.getItem("userId")
    if (userId) {
      let userInfo = await fetch(`http://localhost:9000/users/${userId}`, { method: "GET" })
      userInfo = await userInfo.json()
      if (userInfo) {
        setCard(userId.card.length)
      }
    }
  }

  useEffect(() => {
    getUserById()
  }, [])


  const handleLogout = () => {
    localStorage.clear();
    navigate("/login")
    return sendToast("Logout successfull")
  }


  return (
    <div class="flex bg-[#281b06] text-gray-50 fixed top-0 left-0 right-0 p-4 justify-between px-20 shadow-md drop-shadow-md rounded-b-3xl text-xl">
      <img src={logo} alt="img" width={80} />
      <div className="flex items-center justify-center gap-10">
        <button class="flex items-center justify-center gap-2" ><span className="text-base">({card})</span>Card </button>
        <button onClick={handleLogout} title="Logout"> <RiLogoutCircleLine class="rotate-90 text-2xl" /></button>
      </div>
    </div>
  )
}

export default Navbar
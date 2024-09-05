import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Login from "./pages/Login"
import Register from "./pages/Register"
import VerifyOtp from "./pages/VerifyOtp"
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

function App() {

  return (
    <div className="flex flex-col font-mono">
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Navigate replace to="/register" />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/verifyotp" element={<VerifyOtp />} />
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Login from "./pages/Login"
import Register from "./pages/Register"
import VerifyOtp from "./pages/VerifyOtp"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AddProduct from "./pages/AddProduct";

function App() {

  return (
    <div className="flex flex-col font-mono">
        <Router>
          <Routes>
            <Route path="*" element={<Navigate replace to="/login" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verifyotp/:id" element={<VerifyOtp />} />
            <Route path="/home" element={<Home />} />   
            <Route path="/addProduct" element={<AddProduct />} />            
          </Routes>
        </Router>
    </div>
  )
}

export default App
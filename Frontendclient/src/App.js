import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import ForgotPassword from './Components/ForgotPassword';
import Dashboard from './Components/Dashboard';
import HotelList from './Components/HotelList';
import AddHotel from './Components/AddHotel';
import Navbar from './Components/Navbar';
import Navbar1 from './Components/Navbar1';
import HotelCard from './Components/HotelCard';
import './App.css'

function App() {
    const isLoggedIn = true; 

    return (
  
           
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/hotelcard" element={<HotelCard />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                {isLoggedIn ? (
                    
                    <>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/hotels" element={<HotelList />} />
                        <Route path="/hotels/add" element={<AddHotel />} />
                    </>
                ) : (
                    <Route path="/" element={<Login />} /> 
                )}
            </Routes>
   
    );
}

export default App;
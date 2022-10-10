import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Services from './pages/Services';
import { ToastContainer } from 'react-toastify';
import UserDashboard from './pages/UserDashboard';
import PrivateRoute from './components/PrivateRoute';
import ProfileInfo from './pages/ProfileInfo';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/user" element={<PrivateRoute />} > 
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="profile-info" element={<ProfileInfo />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SAdminChauffeurs from './pages/SAdminChauffeurs';
import Assignation from "./pages/Assignation";
import Login from "./pages/Login";
import AdminSignup from "./pages/AdminSignup";
import TravelList from "./pages/TravelList";
import Dashboard from './pages/Dashboard.jsx';
import List from './Components/list/List';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/' element={<List />} />
        <Route path='/home' element={<Home />} />
        <Route path='/superadmin/chauffeurs' element={<SAdminChauffeurs />} />
        <Route path="/superadmin/assignation" element={<Assignation />} />
  	    <Route path="/superadmin/login" element={<Login />} />
  	    <Route path="/superadmin/adminsignup" element={<AdminSignup />} />
  	    <Route path="/superadmin/travellist" element={<TravelList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

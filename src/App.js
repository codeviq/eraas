import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './app/screens/Layout/Layout'
import Login from './app/screens/Login/Login'
import AdminDashboard from './app/screens/admin/AdminDashboard/AdminDashboard'
import PrivateRoute from "./app/utils/PrivateRoute"
function App() {
  return (
  
    <Router>
        
      <Routes>
        <Route element={ < PrivateRoute /> }>
            <Route path="/admin" element={<AdminDashboard />} />
        </Route>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={ <Login /> } />

        <Route>

        </Route>
        </Routes>
      
    </Router>
  
  );
}

export default App;

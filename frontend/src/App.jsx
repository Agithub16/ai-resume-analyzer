// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import SignUp from './pages/Signup'
export default function App() {

  return (
  <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/signup" element={<SignUp />} />

    </Routes>
  </Router>
  )
 
}

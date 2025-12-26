// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Navbar from './components/Navbar' 
export default function App() {

  return (
  <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signin" element={<SignIn />} />

    </Routes>
  </Router>
  )
 
}

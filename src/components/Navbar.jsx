// components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        boxSizing: 'border-box'
      }}
    >
      <div className="font-bold text-xl" style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
        <span className=" text-xs font-bold">RESUME</span>
        <span className="text-2xl" style={{ color: '#a855f7' }}>VISION</span>
      </div>
      <Link to="/signin" className="glass login-button" style={{display: 'inline-block'}}>Sign in</Link>
    </div>
  )
}

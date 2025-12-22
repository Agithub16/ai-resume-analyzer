// components/Navbar.jsx
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
        <span className="text-xs font-bold">RESUME</span>
        <span className="text-2xl" style={{ color: '#a855f7' }}>VISION</span>
      </div>
      <button className="glass login-button">Log In</button>
    </div>
  )
}

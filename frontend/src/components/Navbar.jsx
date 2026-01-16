// components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth } from '../firebase/config'; 
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        boxSizing: "border-box",
        zIndex: 1000,
        background: 'transparent',
      }}
    >
      <div
        className="font-bold text-xl"
        style={{ display: "flex", flexDirection: "column", lineHeight: "1.2" }}
      >
        <span className="text-xs font-bold text-white">RESUME</span>
        <span className="text-2xl" style={{ color: "#a855f7" }}>
          VISION
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {user ? (
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* --- Profile Picture (PFP) --- */}
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="Profile"
                referrerPolicy="no-referrer"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  border: "2px solid #a855f7",
                  objectFit: "cover",
                }}
              />
            ) : (
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: "#a855f7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {user.email[0].toUpperCase()}
              </div>
            )}

            {/* --- Logout Button --- */}
            <button
              onClick={handleLogout}
              className="glass"
              style={{
                padding: "8px 16px",
                cursor: "pointer",
                background: "transparent",
                border: "1px solid  #a855f7",
                color: "white",
                borderRadius: "50px",
                fontSize: "14px",
                transition: "0.3s",
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/signin"
            className="glass login-button"
            style={{ display: "inline-block" }}
          >
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
}

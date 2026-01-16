import { useState } from 'react';
import { motion } from 'framer-motion';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'; // 1. signInWithPopup add kiya
import { auth, googleProvider } from '../firebase/config'; // 2. googleProvider import kiya
import { useNavigate, Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'; // Icon ke liye: npm install react-icons

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // --- Google Sign-In Function ---
  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('Google Sign-in successful!', result.user);
      navigate('/');
    } catch (error) {
      setError("Google sign-in failed. Please try again.");
      console.error('Google error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setError(''); 
    setLoading(true); 
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Signed in successfully!', userCredential.user);
      navigate('/');
    } catch (error) {
      setError(error.message);
      console.error('Sign-in error:', error.message);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass p-8 w-full max-w-md"
      style={{
      background: 'linear-gradient(#1a1a1a, #1a1a1a) padding-box, linear-gradient(90deg, #6366f1, #a855f7) border-box',
    }}>
        <h1 className="text-2xl! font-bold mb-6 mt-7 text-center text-white">Welcome Back</h1>

        <div className="text-center mt-6 mb-6">
          <span className="text-gray-400">Don't have an account yet? </span>
          <Link 
            to="/Signup" 
            className="text-indigo-400 hover:text-indigo-300 hover:underline transition-colors"
          >
            Sign up
          </Link>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          <div>
            <input 
              type="email" 
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 text-white placeholder:text-gray-400"
              required
            />
          </div>
          
          <div>
            <input 
              type="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 text-white placeholder:text-gray-400"
              required
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full login-button py-3 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold bg-indigo-600 rounded-lg"
          >
            {loading ? 'Processing...' : 'Sign in'}
          </button>
        </form>

        {/* --- Divider --- */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/10"></span></div>
          <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#111] px-2 text-gray-500">Or continue with</span></div>
        </div>

        {/* --- Google Button --- */}
        <button 
          onClick={handleGoogleSignIn}
          type="button"
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 py-3 bg-white hover:bg-gray-100 text-black font-semibold rounded-lg transition-all"
        >
          <FcGoogle size={20} />
          Google
        </button>
      </div>
    </div>
  )
}
  
  

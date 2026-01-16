import { useState } from 'react';
import { motion } from 'framer-motion';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useNavigate, Link } from 'react-router-dom';
import { FiUser, FiLock } from 'react-icons/fi';

export default function SignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Firebase ko email chahiye hota hai, isliye hum username ko email format mein convert kar rahe hain piche se
    const fakeEmail = `${username.trim().toLowerCase()}@vision.com`;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, fakeEmail, password);
      // Firebase mein User ka Display Name set kar rahe hain
      await updateProfile(userCredential.user, { displayName: username });
      
      console.log('Account created for:', username);
      navigate('/');
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError("Ye username pehle se kisi ne le rakha hai.");
      } else {
        setError(err.message.replace('Firebase:', ''));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#0a0a0a]">
      {/* Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/15 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/15 blur-[120px] rounded-full"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass p-8 w-full max-w-md"
        style={{
          background: 'linear-gradient(#141414, #141414) padding-box, linear-gradient(145deg, #6366f1, #a855f7) border-box',
          border: '1px solid transparent',
          borderRadius: '24px'
        }}
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight">Join the Vision</h1>
          <p className="text-gray-400 mt-2">Create your unique username</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-xl text-xs text-center">
              {error}
            </div>
          )}

          {/* Username Input */}
          <div className="relative">
            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input 
              type="text" 
              placeholder="Pick a Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500/50 outline-none text-white transition-all"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input 
              type="password" 
              placeholder="Secret Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500/50 outline-none text-white transition-all"
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg transition-all active:scale-[0.98] disabled:opacity-50"
          >
            {loading ? 'Creating Account...' : 'Create My Account'}
          </button>
        </form>

        <p className="text-center mt-8 text-gray-400 text-sm">
          Already a member? <Link to="/signin" className="text-purple-400 font-bold hover:underline">Sign In</Link>
        </p>
      </motion.div>
    </div>
  );
}
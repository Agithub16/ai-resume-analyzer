import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useNavigate, Link } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
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
      <div className="glass p-8 w-full max-w-md">
        <h1 className="!text-2xl font-bold mb-6 mt-7 text-center">Welcome Back</h1>

        <div className="text-center mt-6 mb-6">
          <span className="text-gray-400">Don't have an account yet? </span>
          <Link 
            to="/signup" 
            className="text-indigo-400 hover:text-indigo-300 hover:underline transition-colors"
          >
            Sign up
          </Link>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg">
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
            className="w-full login-button py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
        
        
      </div>
    </div>
  )
}
  
  

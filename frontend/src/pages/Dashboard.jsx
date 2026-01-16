import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiFileText, FiCpu, FiMessageSquare, FiArrowLeft, FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Home page (UploadBox) se aayi hui file pakadne ke liye
  const [file, setFile] = useState(location.state?.resumeFile || null);
  const [jd, setJd] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  // Agar user bina file ke /dashboard pe aaye, toh wapas bhej do
  useEffect(() => {
    if (!file) {
      navigate('/');
    }
  }, [file, navigate]);

 const handleAnalysis = async () => {
   if (!jd) {
     alert("Please paste a Job Description first!");
     return;
   }

   setLoading(true);

   const formData = new FormData();
   formData.append("resume", file);
   formData.append("jd", jd);

   try {
     const response = await fetch("http://localhost:5000/analyze", {
       method: "POST",
       body: formData,
     });

     // Galti yahan thi: data ko pehle variable mein lena zaroori hai
     const resultData = await response.json();

     console.log("Backend Response:", resultData);

     if (resultData && resultData.analysis) {
       setResult(resultData); // Ab ye state mein sahi jayega
     } else {
       alert("AI se sahi response nahi mila!");
     }
   } catch (error) {
     console.error("Error:", error);
     alert("Backend server se connect nahi ho paya!");
   } finally {
     setLoading(false);
   }
 };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white p-6 pt-28">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-all">
            <FiArrowLeft /> Back to Home
          </button>
          <div className="text-right">
            <h1 className="text-2xl font-bold bg-linear-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent">RESUME VISION</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Section 1: Resume Preview */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-6 rounded-3xl border border-white/10"
          >
            <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <FiFileText /> Your Resume
            </h2>
            <div className="bg-white/5 border-2 border-dashed border-white/10 rounded-2xl p-10 text-center">
              <FiFileText className="text-5xl text-indigo-500/50 mx-auto mb-3" />
              <p className="font-medium text-lg truncate">{file?.name}</p>
              <p className="text-gray-500 text-xs mt-1">Ready for scanning</p>
            </div>
          </motion.div>

          {/* Section 2: Job Description Input */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-6 rounded-3xl border border-white/10 flex flex-col"
          >
            <h2 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <FiMessageSquare /> Target Job Description
            </h2>
            <textarea 
              value={jd}
              onChange={(e) => setJd(e.target.value)}
              placeholder="Paste the Job Description here..."
              className="grow bg-black/30 border border-white/10 rounded-2xl p-4 text-sm focus:border-purple-500 outline-none transition-all resize-none min-h-50"
            />
          </motion.div>
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button 
            onClick={handleAnalysis}
            
            disabled={loading || !jd}
            className="px-12 py-4 bg-white text-black font-bold rounded-full hover:scale-105 active:scale-95 transition-all disabled:opacity-30 flex items-center gap-3 mx-auto shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            {loading ? (
              <><div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div> Analyzing...</>
            ) : (
              <><FiCpu /> Run AI Analysis</>
            )}
          </button>
        </div>

        {/* --- Results Section (Sirf tab dikhega jab result aayega) --- */}
        {result && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 p-8 glass rounded-3xl border border-green-500/30 bg-green-500/5"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-green-400">
              <FiCheckCircle /> Analysis Result
            </h2>
            <div className="text-gray-200 whitespace-pre-wrap text-lg leading-relaxed bg-black/20 p-4 rounded-xl">
              {result.analysis}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
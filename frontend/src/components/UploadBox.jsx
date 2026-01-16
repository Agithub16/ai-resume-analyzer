import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom' // Navigation ke liye
import { FiFileText, FiX, FiArrowRight } from 'react-icons/fi' // Icons ke liye: npm install react-icons

export default function UploadBox() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [error, setError] = useState('')
  const fileInputRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const navigate = useNavigate()

  const handleFileSelect = (file) => {
    setError('')
    const validExtensions = ['.pdf', '.docx']
    const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'))

    if (!validExtensions.includes(fileExtension)) {
      setError('Please upload a PDF or DOCX file only.')
      return
    }

    if (file.size > 2 * 1024 * 1024) {
      setError('File size must be less than 2MB.')
      return
    }

    setSelectedFile(file)
  }

  // Dashboard par bhejte waqt file ko sath le jana
  const handleGoToDashboard = () => {
    if (selectedFile) {
      navigate('/dashboard', { state: { resumeFile: selectedFile } });
    }
  }

  return (
    <div 
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(e) => { e.preventDefault(); setIsDragging(false); handleFileSelect(e.dataTransfer.files[0]); }}
      className={`outline outline-white/40 outline-dashed glass w-full max-w-md mx-auto my-10 p-6 rounded-2xl text-center transition-all duration-300 ${
        isDragging ? 'border-purple-400 bg-purple-500/20 scale-[1.02]' : 'border-transparent'
      }`}
    >
      {!selectedFile ? (
        // --- Pehla View: Jab koi file nahi hai ---
        <>
          <p className="text-gray-300 mb-2 font-medium">Drop your resume here or choose a file</p>
          <p className="text-gray-500 text-sm mb-6">PDF & DOCX only · Max 2MB</p>
          
          <input
            type="file"
            ref={fileInputRef}
            accept=".pdf,.docx"
            onChange={(e) => e.target.files[0] && handleFileSelect(e.target.files[0])}
            className="hidden"
          />

          <button 
            onClick={() => fileInputRef.current?.click()}
            className="w-full py-3 bg-linear-to-r from-purple-500 to-indigo-600 font-bold rounded-xl hover:bg-gray-100 transition-all"
          >
            Upload Your Resume
          </button>
        </>
      ) : (
        // --- Dusra View: Jab file select ho jaye (Sahi wala logic) ---
        <div className="animate-in fade-in duration-500">
          <div className="flex items-center justify-between bg-white/5 p-4 rounded-xl border border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <FiFileText className="text-indigo-400 text-2xl" />
              <div className="text-left">
                <p className="text-sm font-medium text-white truncate max-w-45">{selectedFile.name}</p>
                <p className="text-[10px] text-gray-500 italic">Ready for analysis</p>
              </div>
            </div>
            <button 
              onClick={() => setSelectedFile(null)} 
              className="p-1.5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 rounded-full transition-all"
            >
              <FiX size={18} />
            </button>
          </div>

          <button 
            onClick={handleGoToDashboard}
            className="w-full py-3 bg-linear-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 group transition-all"
          >
            Go to Dashboard <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}

      {error && <p className="text-red-400 text-sm mt-3 font-medium">{error}</p>}
    </div>
  )
}
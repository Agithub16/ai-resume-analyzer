// components/UploadBox.jsx
import { useState, useRef } from 'react'

export default function UploadBox() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [error, setError] = useState('')
  const fileInputRef = useRef(null)

  const handleFileSelect = (file) => {
    setError('')

    const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    const validExtensions = ['.pdf', '.docx']
    const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'))

    if (!validTypes.includes(file.type) && !validExtensions.includes(fileExtension)) {
      setError('Please upload a PDF or DOCX file only.')
      return
    }

    const maxSize = 2 * 1024 * 1024 // 2MB in bytes
    if (file.size > maxSize) {
      setError('File size must be less than 2MB.')
      return
    }

    setSelectedFile(file)
  }
  
  return (
    <div 
    className="outline outline-2 outline-white/40 [outline-style:dashed] glass w-full max-w-md mx-auto my-10 p-4 md:p-5 border-2 border-dashed border-gray-600 rounded-xl text-center">
      <p className="text-gray-300 mb-2">Drop your resume here or choose a file. PDF & DOCX only. Max 2MB file size.</p>
      <p className="text-gray-500 text-sm">PDF & DOCX only · Max 2MB</p>

      <input
        type="file"
        ref={fileInputRef}
        accept=".pdf,.docx"
        onChange={(e) => {
          if (e.target.files[0]) {
            handleFileSelect(e.target.files[0])
          }
        }}
        className="hidden"
      />

      {selectedFile && (
        <p className="text-green-400 text-sm mt-3">
          Selected: {selectedFile.name}
        </p>
      )}
      {error && (
        <p className="text-red-400 text-sm mt-3">
          {error}
        </p>
      )}

      <button 
        onClick={() => fileInputRef.current?.click()}
        className="mt-4 w-full py-2.5 bg-gradient-to-r from-purple-500 to-indigo-500 border-none rounded-lg text-white font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all"
      >
        {selectedFile ? 'Change Resume' : 'Upload Your Resume'}
      </button>
    </div>
  )
}

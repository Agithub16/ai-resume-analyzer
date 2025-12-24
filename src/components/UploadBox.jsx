// components/UploadBox.jsx
import { useState, useRef } from 'react'

export default function UploadBox() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [error, setError] = useState('')
  const fileInputRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)

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
  //for drag and drop
  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }
  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }
  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const files = e.dataTransfer.files
    if (files && files[0]) {
      handleFileSelect(files[0])
    }
  }

  return (
    <div 
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`outline outline-2 outline-white/40 [outline-style:dashed] glass w-full max-w-md mx-auto my-10 p-4 md:p-5 border-2 border-dashed rounded-xl text-center transition-all ${
        isDragging 
          ? 'border-purple-400 bg-purple-500/20 scale-105' 
          : 'border-gray-600'
      }`}
    >
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

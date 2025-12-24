// components/UploadBox.jsx
export default function UploadBox() {
  return (
    <div className="outline outline-2 outline-white/40 [outline-style:dashed] glass w-full max-w-md mx-auto my-10 p-4 md:p-5 border-2 border-dashed border-gray-600 rounded-xl text-center">
      <p className="text-gray-300 mb-2">Drop your resume here or choose a file. PDF & DOCX only. Max 2MB file size.</p>
      <p className="text-gray-500 text-sm">PDF & DOCX only · Max 2MB</p>

      <button className="mt-4 w-full py-2.5 bg-gradient-to-r from-purple-500 to-indigo-500 border-none rounded-lg text-white font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all">
        Upload Your Resume
      </button>
    </div>
  )
}

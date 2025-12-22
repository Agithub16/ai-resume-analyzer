// pages/Home.jsx
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import UploadBox from '../components/UploadBox'
import Features from '../components/Features'

export default function Home() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <UploadBox />
      <Features />
    </div>
  )
}

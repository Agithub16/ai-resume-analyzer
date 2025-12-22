// components/Hero.jsx
export default function Hero() {
  return (
    <div style={{textAlign:'center', marginTop:'80px'}}>
      <span className="ai-powered-badge px-3.5 py-1.5 rounded-md text-sm mb-6 inline-block">✨ AI Powered</span>

      <h1 className="text-5xl font-bold mb-4">
        <span className="text-purple-400">Smart Resume Check</span>{' '}
        <span className="text-blue-400">Fast & Free</span>
      </h1>

      <p className="text-gray-400 text-lg mb-8">Fix errors, improve keywords, and boost your chances.</p>
    </div>
  )
}


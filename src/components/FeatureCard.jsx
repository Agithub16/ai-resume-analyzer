export default function FeatureCard({ title, desc }) {
  return (
    <div className="feature-card p-5 w-56 rounded-xl">
      <h4 className="text-white text-lg font-semibold mb-2">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

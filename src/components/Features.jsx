import FeatureCard from './FeatureCard'

export default function Features() {
  return (
    <div className="mt-16 mb-10">
      <h2 className="text-white text-2xl font-bold text-center mb-8">Key Features</h2>
      <div className="flex flex-col md:flex-row gap-5 justify-center">
      <FeatureCard
        title="ATS Scan"
        desc="Check if your resume passes applicant tracking systems."
      />
      <FeatureCard
        title="Keyword Match"
        desc="Match your resume keywords with job descriptions."
      />
      <FeatureCard
        title="Formatting Review"
        desc="Ensure clean, professional formatting."
      />
      </div>
    </div>
  )
}

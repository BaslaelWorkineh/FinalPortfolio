import type React from "react"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  location: string
  description: string[]
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, period, location, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
          <p className="text-emerald-600 dark:text-emerald-400 font-medium">{company}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-600 dark:text-gray-400">{period}</p>
          <p className="text-gray-600 dark:text-gray-400">{location}</p>
        </div>
      </div>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ExperienceCard

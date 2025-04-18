import type React from "react"

interface TechStackProps {
  technologies: string[]
  className?: string
}

const TechStack: React.FC<TechStackProps> = ({ technologies, className = "" }) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="px-3 py-1.5 bg-white dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200 text-sm font-medium shadow-sm"
        >
          {tech}
        </div>
      ))}
    </div>
  )
}

export default TechStack

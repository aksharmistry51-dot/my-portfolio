import { skills } from "../data/data"

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Skills
        </h2>
        <div className="w-16 h-1 bg-blue-400 mx-auto mb-12"></div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div key={skill}
              className="bg-gray-800 border border-gray-700 hover:border-blue-400 text-white px-6 py-4 rounded-xl text-center font-medium transition-colors duration-200 hover:text-blue-400">
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
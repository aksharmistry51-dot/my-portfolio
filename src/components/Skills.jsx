import { skills } from "../data/data"

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-2">Skills</h2>
        <div className="w-16 h-1 bg-indigo-500 mx-auto mb-12"></div>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div key={skill}
              className="bg-slate-900 border border-slate-700 hover:border-indigo-500 hover:bg-indigo-950 text-slate-300 hover:text-indigo-300 px-6 py-4 rounded-xl font-medium transition-all duration-200">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
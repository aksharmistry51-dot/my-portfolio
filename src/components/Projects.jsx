import { projects } from "../data/data"

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-900 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-2">Projects</h2>
        <div className="w-16 h-1 bg-indigo-500 mx-auto mb-12"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.name}
              className="bg-slate-950 border border-slate-700 hover:border-indigo-500 rounded-xl p-6 flex flex-col transition-all duration-200">
              <h3 className="text-white font-bold text-xl mb-3">{project.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t}
                    className="bg-indigo-950 text-indigo-300 border border-indigo-800 px-3 py-1 rounded-full text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noreferrer"
                className="border border-slate-600 hover:border-indigo-400 hover:text-indigo-300 text-slate-300 text-sm text-center py-2 rounded-lg transition-colors duration-200">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
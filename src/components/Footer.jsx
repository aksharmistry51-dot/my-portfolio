import { personalInfo } from "../data/data"

export default function Footer() {
  return (
    <footer className="bg-slate-800 border-t border-slate-700 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-sm">
          Built by <span className="text-indigo-400 font-medium">{personalInfo.name}</span>
        </p>
        <div className="flex gap-6">
          <a href={"mailto:" + personalInfo.email}
            className="text-slate-400 hover:text-indigo-400 text-sm transition-colors duration-200">Email</a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer"
            className="text-slate-400 hover:text-indigo-400 text-sm transition-colors duration-200">GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
            className="text-slate-400 hover:text-indigo-400 text-sm transition-colors duration-200">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
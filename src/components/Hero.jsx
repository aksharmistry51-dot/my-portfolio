import { personalInfo } from "../data/data"

export default function Hero() {
  const btnPrimary = "bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
  const btnSecondary = "border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 pt-16">
      <div className="text-center px-6">

        <p className="text-blue-400 text-sm font-medium mb-4 tracking-widest uppercase">
          Hello, I am
        </p>

        <h1 className="text-5xl font-bold text-white mb-4">
          {personalInfo.name}
        </h1>

        <h2 className="text-xl text-gray-400 mb-6">
          {personalInfo.title}
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
          {personalInfo.intro}
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#projects" className={btnPrimary}>
            View Projects
          </a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className={btnSecondary}>
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={btnSecondary}>
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  )
}
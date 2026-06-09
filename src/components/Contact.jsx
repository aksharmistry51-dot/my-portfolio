import { personalInfo } from "../data/data"

export default function Contact() {
  const btnPrimary = "bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
  const btnSecondary = "border border-slate-600 hover:border-indigo-400 text-slate-300 hover:text-indigo-300 px-8 py-3 rounded-lg font-medium transition-colors duration-200"

  return (
    <section id="contact" className="bg-slate-900 py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
        <div className="w-16 h-1 bg-indigo-500 mx-auto mb-6"></div>
        <p className="text-slate-400 text-lg mb-12">
          I am open to new opportunities. Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={"mailto:" + personalInfo.email} className={btnPrimary}>Email Me</a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className={btnSecondary}>GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={btnSecondary}>LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
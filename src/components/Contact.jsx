import { personalInfo } from "../data/data"

export default function Contact() {
  const btnPrimary = "bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
  const btnSecondary = "border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"

  return (
    <section id="contact" className="bg-gray-900 py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-white mb-2">
          Get In Touch
        </h2>
        <div className="w-16 h-1 bg-blue-400 mx-auto mb-6"></div>

        <p className="text-gray-400 text-lg mb-12">
          I am open to new opportunities. Feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a href={"mailto:" + personalInfo.email} className={btnPrimary}>
            Email Me
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
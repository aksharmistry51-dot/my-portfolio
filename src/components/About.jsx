import { personalInfo } from "../data/data"

export default function About() {
  return (
    <section id="about" className="bg-gray-800 py-20 px-6">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold text-white text-center mb-2">
          About Me
        </h2>
        <div className="w-16 h-1 bg-blue-400 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {personalInfo.about}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              {personalInfo.learning}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              My Interests
            </h3>
            <div className="flex flex-wrap gap-3">
              {personalInfo.interests.map((interest) => (
                <span key={interest}
                  className="bg-gray-700 text-blue-400 border border-gray-600 px-4 py-2 rounded-full text-sm font-medium">
                  {interest}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
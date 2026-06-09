import { personalInfo } from "../data/data"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-sm border-b border-slate-800 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-white font-bold text-xl">
          {personalInfo.name.split(" ")[0]}
          <span className="text-indigo-400">.</span>
        </span>
        <div className="flex gap-8">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a key={item} href={"#" + item.toLowerCase()}
              className="text-slate-400 hover:text-indigo-400 text-sm transition-colors duration-200">
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
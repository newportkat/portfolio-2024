import React from "react"
import About from "./components/About"
import Projects from "./components/Projects"
import UIClones from "./components/UIClones"

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-full min-h-screen gap-16 text-gray-200 bg-gray-900">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-7xl font-pixel">Tom Katilius</h1>
        <h2 className="text-2xl font-roboto">Full-Stack Developer</h2>
      </div>
      <About />
      <Projects />
      <UIClones />
    </div>
  )
}

export default App

import React from "react"
import CatAnimation from "./assets/cat-lying-down-export.gif"

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-full min-h-screen gap-10 p-6 text-gray-200 bg-gray-900">
      <div className="relative flex flex-col items-center justify-center w-auto pt-2 pb-2 text-center border-t border-b border-gray-200">
        <h1 className="text-5xl leading-normal font-pixel">TOMKAT</h1>
        <h2 className="text-l font-roboto">FULL-STACK DEVELOPER</h2>
        <img
          src={CatAnimation}
          alt="Cat lying down"
          className="absolute -top-9"
        />
      </div>

      <button className="px-4 py-2 mt-5 leading-normal tracking-wider text-gray-200 bg-transparent border border-gray-500 rounded text-md hover:bg-gray-700 hover:text-white hover:border-transparent">
        ENTER
      </button>
    </div>
  )
}

export default App

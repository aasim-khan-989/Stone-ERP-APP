import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600">
          Tile ERP
        </h1>

        <p className="mt-4 text-slate-600">
          Tailwind CSS v4 is working successfully.
        </p>

        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Test Button
        </button>
      </div>
    </div>
  );
}

export default App;



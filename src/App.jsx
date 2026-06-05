import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      
      {/* LIGHT THEME */}
      <div className="bg-zinc-50 p-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-zinc-900">
            Stone ERP
          </h1>

          <p className="text-zinc-500 mt-2">
            Apple Inspired Light Theme
          </p>

          <div className="mt-6 bg-white border border-zinc-200 rounded-3xl p-5 shadow-sm">
            <h2 className="font-semibold text-zinc-900">
              Inventory Management
            </h2>

            <p className="text-zinc-500 mt-2">
              Manage products, stock and reports.
            </p>

            <div className="mt-5 space-y-3">
              <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-3">
                Products
              </div>

              <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-3">
                Add Stock
              </div>

              <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-3">
                Release Stock
              </div>
            </div>

            <button className="mt-5 w-full bg-black text-white py-3 rounded-2xl font-medium">
              Open Inventory
            </button>
          </div>
        </div>
      </div>

      {/* DARK THEME */}
      <div className="bg-slate-950 p-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-white">
            Stone ERP
          </h1>

          <p className="text-slate-400 mt-2">
            Modern SaaS Dark Theme
          </p>

          <div className="mt-6 bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl">
            <h2 className="font-semibold text-white">
              Inventory Management
            </h2>

            <p className="text-slate-400 mt-2">
              Manage products, stock and reports.
            </p>

            <div className="mt-5 space-y-3">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-3 text-white">
                Products
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-3 text-white">
                Add Stock
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-3 text-white">
                Release Stock
              </div>
            </div>

            <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-medium">
              Open Inventory
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;


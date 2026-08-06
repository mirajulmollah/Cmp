//============================================================App.jsx

import './App.css'


function App() {


  return (
    <>
      <div>
        <header className="max-w-[60rem] flex justify-between text-xl text-white/70 bg-amber-500 m-auto">
          <h1><span className='font-extrabold text-[tomato]'>B</span>rand</h1>
          <div className='flex gap-6'>
            <a href="">Features</a>
            <a href="">Use cases</a>
            <a href="">Integrations</a>
            <a href="">Protfolio</a>
          </div>
          <button>Sign us!</button>
        </header>
      </div>
    </>
  )
}

export default App

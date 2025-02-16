import { useState } from "react"

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
      <div className="w-screen h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-5 rounded-full shadow-lg bg-white px-4 py-2">
            <button onClick={()=>{setColor('red')}} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: 'red'}}>Red</button>
            <button onClick={()=>{setColor('green')}} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: 'green'}}>Red</button>
            <button onClick={()=>{setColor('blue')}} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: 'blue'}}>Red</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

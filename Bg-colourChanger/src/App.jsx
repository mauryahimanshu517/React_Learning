import { useState } from 'react'


function App() {
  const [colour, setColour] = useState("olive")

  return (
   <>
    <div className='w-full h-screen duration-200' style={{backgroundColor: colour}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2'>
        <button onClick={()=>setColour("red")} className='outline-none px-4 text-white bg-' style={{backgroundColor: "red"}}>Red</button>
        <button onClick={()=>setColour("green")}  className='outline-none px-4 text-white' style={{backgroundColor: "green"}}>Green</button>
        <button onClick={()=>setColour("blue")} className='outline-none px-4 text-white' style={{backgroundColor: "blue"}}>blue</button>
        
      </div>
    </div>
    </div>
   
   </> 
  )
}

export default App

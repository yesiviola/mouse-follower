import {useEffect, useState } from "react"
function App() {
  const  [enabled, setEnabled]= useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})
  useEffect(() => {
    console.log ('effect', {enabled})


 const handleMove = (event) => {
  const { clientX, clientY } = event
  console.log ('handleMove', { clientX, clientY })
  setPosition ({ x: clientX, y: clientY })
 }

 if (enabled) {
  window.addEventListener('pointermove', handleMove)
 }
 return ()=>{
  window.removeEventListener('pointermove', handleMove)
 }
  }, [enabled])
  

  return (
    <main>
  <div style ={{
    position: 'absolute',
    backgroundColor: '#09f',
    border: '1px solid #ccc',
    borderRadius: '50px',
    opacity: 0.8,
    pointerEvents: 'none',
    left: -20,
    top: -20,
    width: 40,
    height: 40,
    transform: `translate(${position.x}px, ${position.y}px)`
  }}
  />
  <button onClick={() => setEnabled(!enabled)}>
    {enabled ? 'Desactivar' :  'Activar'}  seguir puntero
  </button>
    </main>
  )
}

export default App

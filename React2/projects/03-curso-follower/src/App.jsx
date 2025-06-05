import { useState, useEffect } from "react"

function App() {
  const[enable, setEnable] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})

  const handleClick = () => {
    setEnable(!enable);
  }

  // userEffect((codigoAEjecutar, listadoDependencias))
  useEffect (() => {
    // se ejecutara por lo menos una vez
    const handleMove = (event) => {
      const {clietX, clientY} = event;
      setPosition({x: clietX, y: clientY});
      console.log("pointermove: ", {clietX,clientY});
      
    }

    // las suscripciones podemos indicarle cuando arrancar, pero una vez arrancadas siguen escuchando el evento
    if(enable){
      window.addEventListener('pointermove', handleMove)
    }
    
    return () => {
      window.removeEventListener('pointermove',handleMove);
    }
  }, [enable])


  return (
    <main>
      <div style={
        {
          position: 'absolute',
          backgroundColor: 'rgba(0,0,0,0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`
        }
      }/>
      <button onClick={handleClick}>
        {enable ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  )
}

export default App

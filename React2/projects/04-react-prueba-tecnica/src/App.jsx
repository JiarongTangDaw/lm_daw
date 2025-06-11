import './App.css'

import { useCatImage } from './hooks/useCatImage';
import { useCatFact } from './hooks/useCatFact';



function App() {
  //const [fact, setFact] = useState('Random cat fact!')
  const {fact, getRandomFact} = useCatFact();
  const {imageSRC} = useCatImage({fact});

  const hadleClick = () => {
    getRandomFact();
  }

  return (
    <>
      <h1>App de gatitos</h1>
      {/* Renderizado condicional en base al valor de fact */}
      {
        fact && <p>{fact}</p>
      }
      {
        imageSRC && <img src={imageSRC} width={500} height={500}/>
      }
      <button onClick={hadleClick}> Aleatorio </button>
    </>
  )
}

export default App

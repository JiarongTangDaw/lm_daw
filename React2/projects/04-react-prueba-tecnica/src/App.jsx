import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM = 'https://catfact.ninja/fact';
const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says';
const CAT_ENDPOINT_IMAGE_URL_OPTIONS = 'size=50&color=red&json=true'

function App() {
  //const [fact, setFact] = useState('Random cat fact!')
  const [fact, setFact] = useState();
  const [imageSRC, setimageSRC] = useState();

  const fetchCatFact = () => {
    fetch(CAT_ENDPOINT_RANDOM)
    //primero hacemos la llamada y devuelve la promesa
    .then(res => res.json())
    // y despues, recuperamos los datos de esa promesa
    .then(respuestaAPI => {
      const hechoRandom = respuestaAPI?.fact || 'No se ha recuperado ningun hecho';
      console.log(hechoRandom);

      return setFact(hechoRandom);
      
    })
  }

  const fetchCatImage = () => {
    const firstWord = fact.split(' ',3).join(' ');
        //console.log(firstWord);

        const URL_IMAGE = `${CAT_ENDPOINT_IMAGE_URL}/${firstWord}?${CAT_ENDPOINT_IMAGE_URL_OPTIONS}`;

        fetch(URL_IMAGE)
        .then(response => response.json())
        .then(data => {
          const {id,url} = data;
          return setimageSRC(url);
        });
  }

  // para recuperar la cita al cargar la pagina
  useEffect(() => {
    fetchCatFact();
  },[]);

  //para recuperar la imagen cada vez que cambie el valor de fact

  useEffect(() => {
    //si no hay ninguna cita disponible todavia, no hacer nada

    if(!fact) return
      console.log("Entro en el useEffect para la imagen");

      fetchCatImage();
      
  }, [fact])

  const hadleClick = () => {
    fetchCatFact();
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

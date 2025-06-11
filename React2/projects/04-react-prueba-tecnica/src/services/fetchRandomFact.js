 /*
    Nunca es buena idea pasar sets o props de un componente a la hora de saparar la logica.
    La idea de separar la logica realmente viene para poder reutilizar esto en otro componte
 */

const CAT_ENDPOINT_RANDOM = 'https://catfact.ninja/fact';

 export const fetchCatFact = async () => {
    //primero hacemos la llamada y devuelve la promesa
    const res = await fetch(CAT_ENDPOINT_RANDOM);

    // y despues, recuperamos los datos de esa promesa
    const respuestaAPI = await res.json();
    
    const hechoRandom = respuestaAPI?.fact || 'No se ha recuperado ningun hecho';
    //console.log(hechoRandom);
      
    return hechoRandom;
    
  }

// referencia de alternativa 

 /* const fetchCatFact = () => {
    fetch(CAT_ENDPOINT_RANDOM)
    //primero hacemos la llamada y devuelve la promesa
    .then(res => res.json())
    // y despues, recuperamos los datos de esa promesa
    .then(respuestaAPI => {
      const hechoRandom = respuestaAPI?.fact || 'No se ha recuperado ningun hecho';
      console.log(hechoRandom);
      
      return setFact(hechoRandom);
    })
  }*/
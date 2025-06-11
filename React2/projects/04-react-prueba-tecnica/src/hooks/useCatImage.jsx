import { useEffect, useState } from "react"; 
 
const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says';
const CAT_ENDPOINT_IMAGE_URL_OPTIONS = 'size=50&color=red&json=true';

// es buena practica pasarle los paramentros como propiedades de un objeto porque de esa manera sera mas fexible, si queremos añadir nuevos atributos, lo podremos hacer sin 

export function useCatImage ({fact}) {

    const [imageSRC, setimageSRC] = useState();

    useEffect(() => {
        //si no hay ninguna cita disponible todavia, no hacer nada
    
        if(!fact) return
          console.log("Entro en el useEffect para la imagen");
    
          const firstWord = fact.split(' ',3).join(' ');
          //console.log(firstWord);
    
          const URL_IMAGE = `${CAT_ENDPOINT_IMAGE_URL}/${firstWord}?${CAT_ENDPOINT_IMAGE_URL_OPTIONS}`;
    
          fetch(URL_IMAGE)
          .then(response => response.json())
          .then(data => {
            const {url} = data;
            return setimageSRC(url);
          });
          
      }, [fact])

      return {imageSRC}
}

  // const fetchCatImage = () => {
   //   if(!fact) return 
   //   const firstWord = fact.split(' ',3).join(' ');
   //       //console.log(firstWord);
 
   //       const URL_IMAGE = `${CAT_ENDPOINT_IMAGE_URL}/${firstWord}?${CAT_ENDPOINT_IMAGE_URL_OPTIONS}`;
 
   //       fetch(URL_IMAGE)
   //       .then(response => response.json())
   //       .then(data => {
   //         const {url} = data;
   //         return setimageSRC(url);
   //       });
   // }

     //para recuperar la imagen cada vez que cambie el valor de fact

  // useEffect(() => {
  //   //si no hay ninguna cita disponible todavia, no hacer nada

  //   if(!fact) return
  //     console.log("Entro en el useEffect para la imagen");

  //     const firstWord = fact.split(' ',3).join(' ');
  //     //console.log(firstWord);

  //     const URL_IMAGE = `${CAT_ENDPOINT_IMAGE_URL}/${firstWord}?${CAT_ENDPOINT_IMAGE_URL_OPTIONS}`;

  //     fetch(URL_IMAGE)
  //     .then(response => response.json())
  //     .then(data => {
  //       const {url} = data;
  //       return setimageSRC(url);
  //     });
      
  // }, [fact])
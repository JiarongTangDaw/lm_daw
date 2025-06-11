import { useEffect, useState } from "react";
import { fetchCatFact } from "../services/fetchRandomFact";

export function useCatFact () {

  const [fact, setFact] = useState();

  const getRandomFact = async () => {
    const newFact = await fetchCatFact();
    setFact(newFact);
  }

  // para recuperar la cita al cargar la pagina
  useEffect(() => {
    getRandomFact();
  },[]);

  return {fact, getRandomFact};
}
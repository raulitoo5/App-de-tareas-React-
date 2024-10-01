import React, { useEffect } from "react";
import { useState } from "react";

// Creación de un hook para usar localStorage con cualquier tipo
// de dato.
function useLocalStorage(itemName, initalValue) {
  const [item, setItem] = useState(initalValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initalValue));
          parsedItem = initalValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log("El error es: ", error);
      }
    }, 2000);
  }, []);


  // Funcion para guardar los cambios en Storage
  const actualizarItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, actualizarItem, loading, error };
}

export { useLocalStorage };
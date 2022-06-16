import React, { useState } from "react";

export const estadoContexto = {
  
}

export const DataContext = React.createContext(null)

export function Contexto(props) {
  const [ nome, setNome ] = useState(estadoContexto);

  function handleSetNome(e) {
    setNome(e.target.value)
  }

  return (
    <DataContext.Provider value={{nome, handleSetNome}}>
      {props.children}
    </DataContext.Provider>
  )
}
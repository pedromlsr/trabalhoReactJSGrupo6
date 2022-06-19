import React from "react";
import { Root } from "./Routes/root";
import { Contexto } from "./Context/data";

import "./App.css"
import { CategorieContainer } from "./Components/Categorie/Categorie";

function App() {
  return (
    <>
      <Contexto>
        <Root />
        <CategorieContainer />        
      </Contexto>
    </>
  );
}

export default App;

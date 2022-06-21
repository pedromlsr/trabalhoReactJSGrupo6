import React from "react";
import { Root } from "./Routes/root";
import { CartItensProvider } from "./Context/data";

function App() {

  return (
    <CartItensProvider>
      <Root />
    </CartItensProvider>
  );
}

export default App;

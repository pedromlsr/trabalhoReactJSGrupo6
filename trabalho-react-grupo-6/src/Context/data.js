import React, { createContext, useState } from 'react';


const CartItensContext = createContext();


const CartItensProvider = (props) => {
    const [cartItens, setCartItens] = useState([]);


    function addItem(produto) {
        setCartItens([...cartItens, produto])
    }
    console.log("Contexto", cartItens);


    return (
        <CartItensContext.Provider
            value={{ cartItens, addItem }}
        >
            {props.children}
        </CartItensContext.Provider>
    );
};

export { CartItensContext, CartItensProvider };
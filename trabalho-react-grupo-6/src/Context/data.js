import React, { createContext, useState } from 'react';


const CartItensContext = createContext();


const CartItensProvider = (props) => {
    const [cartItens, setCartItens] = useState([]);

    function addItem(produto) {
        if(!cartItens.includes(produto))
        setCartItens([...cartItens, produto])
    }    

    return (
        <CartItensContext.Provider
            value={{ cartItens, addItem }}
        >
            {props.children}
        </CartItensContext.Provider>
    );
};

export {CartItensContext, CartItensProvider};
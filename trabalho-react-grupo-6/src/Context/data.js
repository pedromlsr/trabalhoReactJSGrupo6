import React, { createContext, useState } from 'react';


const CartItensContext = createContext();


const CartItensProvider = (props) => {
    const [cartItens, setCartItens] = useState([]);
    const[stateValorTotal, setValorTotal]= useState(0);

    function addItem(produto) {
        if(!cartItens.includes(produto))
        setCartItens([...cartItens, produto])
    }    

    function valorTotal(cartItens){
    cartItens.map((item)=>(
       setValorTotal(item.quantidade*item.valorUnitario)
    ))
    }

    return (
        <CartItensContext.Provider
            value={{ cartItens, addItem, valorTotal, stateValorTotal }}
        >
            {props.children}
        </CartItensContext.Provider>
    );
};

export {CartItensContext, CartItensProvider};
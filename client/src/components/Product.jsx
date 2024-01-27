import React from 'react';

function Product({ name, price, description }) {
    return (
        <>
            <div>{name}</div>
            <div>{price}</div>
            <div>{description}</div>
            <button>Adicionar no carrinho</button>
        </>
    );
}

export default Product;

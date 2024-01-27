import React, { useEffect, useState } from 'react';
import Product from '../../components/Product';
import Header from '../../components/Header';

function IndexProduct() {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await fetch('http://localhost:3000/api/products');

        const { data, code } = await response.json();

        if (code === 200) {
            setProducts(data);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <Header />
            {products ? (
                products.map((product, i) => (
                    <Product key={i} name={product.name} price={product.price} description={product.description} />
                ))
            ) : (
                <h1
                    style={{
                        textAlign: 'center'
                    }}
                >
                    Nenhum produto foi encontrado
                </h1>
            )}
        </>
    );
}

export default IndexProduct;

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header>
                <h1>Loja de camiseta</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/products'}>Produtos</Link>
                        </li>
                        <li>
                            <Link to={'/user/profile'}>Usuário</Link>
                        </li>
                        <li>carrinho</li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;

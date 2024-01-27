import { Link } from 'react-router-dom';

function IndexAdmin() {
    return (
        <>
            <Link to="/product/create">Criar Produto</Link>
            <Link to="/collection/create">Criar Coleção</Link>
        </>
    );
}

export default IndexAdmin;

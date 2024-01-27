import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Collection from './components/Collection';
import Header from './components/Header';

function App() {
    const [collections, setCollections] = useState([]);

    const getCollections = async () => {
        const response = await fetch('http://localhost:3000/api/collections');

        const { data, code } = await response.json();

        if (code === 200) {
            setCollections(data);
        }
    };

    useEffect(() => {
        getCollections();
    }, []);

    return (
        <>
            <Header />
            <main>
                <div>
                    {collections.map(collection => (
                        <Collection
                            key={collection.id}
                            id={collection.id}
                            name={collection.name}
                            description={collection.description}
                            image={collection.image}
                        />
                    ))}
                </div>
                <Link to={'/products'}>Ver todos</Link>
            </main>
        </>
    );
}

export default App;

import { useEffect, useState } from 'react';

function CreateProduct() {
    const [collections, setCollections] = useState([]);

    const getCollections = async () => {
        const response = await fetch('/api/collections');

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
            <form>
                <input type="text" />
                <input type="number" />
                <textarea cols="30" rows="10"></textarea>
                <select>
                    <option value="">Selecione</option>
                    {collections.map((collection, i) => (
                        <option value={collection.id}>{collection.name}</option>
                    ))}
                </select>
                <input type="file" />
                <button>Criar</button>
            </form>
        </>
    );
}

export default CreateProduct;

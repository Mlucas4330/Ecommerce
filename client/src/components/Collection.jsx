import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import useBlobToImage from '../hooks/useBlobToImage';
import { Link } from 'react-router-dom';

function Collection({ id, image, name, description }) {
    const imageSrc = useBlobToImage(image);

    return (
        <Box
            w={'50dvw'}
            h={'50dvh'}
            backgroundImage={imageSrc}
            backgroundSize={'cover'}
            backgroundPosition={'center'}
            backgroundRepeat={'no-repeat'}
        >
            <Heading>{name}</Heading>
            <Text>{description}</Text>
            <Button>
                <Link to={`/collection/${id}`}>Ver Mais</Link>
            </Button>
        </Box>
    );
}

export default Collection;

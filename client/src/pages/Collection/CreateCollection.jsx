import { Button, Heading, Input, Textarea } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

function CreateCollection() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const handleCollection = async data => {
        console.log(data);
        try {
            const formData = new FormData();

            formData.append('name', data.name);
            formData.append('description', data.description);
            formData.append('image', data.image[0]);

            const response = await fetch('http://localhost:3000/api/collection/create', {
                method: 'POST',
                body: formData
            });

            const { message, code } = await response.json();

            console.log(message);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <Heading>Criar coleção</Heading>
            <form onSubmit={handleSubmit(handleCollection)}>
                <Input {...register('name')} />
                <Input {...register('image')} type="file" />
                <Textarea {...register('description')}></Textarea>
                <Button type="submit">Criar coleção</Button>
            </form>
        </>
    );
}

export default CreateCollection;

import React , { useState } from 'react'
import { Button, Card, CardBody, Container, Form} from 'react-bootstrap'


export const RecuperacionContraseña = () => {
    const[email,setEmail] = useState("");
    const onChange =(e) =>{
        e.preventDefault();
        setEmail(e.target.value)
    }

return (
<Container>
    <Card>
        <CardBody>
            <Card.Title> Ingresar Tu Correo Electronico ( ಠ ͜ʖರೃ)</Card.Title>
            <Form.Control name= "email" placeholder='Correo Electronico' onChange={onChange}></Form.Control>
            <Button className='mt-4' type='submit'>Recuperar Contraseña</Button>
        </CardBody>
    </Card>
</Container>
)
}
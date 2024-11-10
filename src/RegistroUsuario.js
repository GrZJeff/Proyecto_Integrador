import { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import './RegistroUsuario.css'; // Asegúrate de crear este archivo CSS

const RegistroUsuario = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del usuario:", usuario);
    // Aquí puedes agregar la lógica para enviar los datos a un servidor
  };

  return (
    <Container className="mt-5">
      <Card className="registro-card">
        <Card.Body>
          <Card.Title className="text-center">Registro de Usuario</Card.Title>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                name="nombre"
                value={usuario.nombre}
                onChange={onChangeInput}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo electrónico"
                name="email"
                value={usuario.email}
                onChange={onChangeInput}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                name="password"
                value={usuario.password}
                onChange={onChangeInput}
                required
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="w-100">
              Registrar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RegistroUsuario;
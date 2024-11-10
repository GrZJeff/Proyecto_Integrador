import React from 'react';
import {  Nav } from  'react-bootstrap';

const Home = () => {
  return (
    <div>
      {/* Barra de navegación */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">BetoxCorp</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#formulario">Formulario</Nav.Link>
        </Nav>
      </Navbar>

      {/* Sección de Inicio */}
      <Container className="mt-5" id="home">
        <Card>
          <Card.Body>
            <Card.Title>Página de Inicio</Card.Title>
            <Card.Text>
              Bienvenido a BetoxCorp. Este es el inicio de nuestra aplicación.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>

      {/* Sección del Formulario */}
      <Container className="mt-5" id="formulario">
        <Card>
          <Card.Body>
            <Card.Title>Formulario de Contacto</Card.Title>
            <Form>
              <Form.Group controlId="formUsername">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su nombre de usuario"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su nombre"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese su correo"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Escriba su mensaje"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" active>
                Enviar
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Home;
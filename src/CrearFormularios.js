import React, { useState } from "react";
import { Card, Container, Form, Button } from 'react-bootstrap';
import AnswerQuestionnaries from "./AswerQuestionnaries";







export const Cuestionarios =()=>{
    return (
        <Container>
          <Card className="mt-4">
            <Card.Body>
              <Card.Title className="text-center"></Card.Title>
              <Form.Control 
                placeholder="Ingresa título del cuestionario" 
                name="title"
              />
              <Card.Text className="mt-3 text-center"></Card.Text>
              <Form.Control 
                placeholder="Ingresa descripción del cuestionario" 
                name="desc" 
              />
            </Card.Body>
          </Card>
    
            <Card className="mt-4">
              <Card.Body>
                <Form.Control 
                  placeholder="Ingresa tu pregunta" 
                  name="pregunta" 
                />
    
                <Form.Select 
                  style={{ width: "25%" }} 
                  className="mt-3" 
                  aria-label="Default select example"
                >
                  <option value="">Selecciona el tipo de pregunta</option>
                  <option value="checkbox">Opción múltiple</option>
                  <option value="text">Pregunta Abierta</option>
                  <option value="radio">Casillas de verificación</option>
                  <option value="select">Selecciona</option>
                </Form.Select>
                  <Button className="mt-2" onClick="" >Agregar Opción</Button>
                <Form.Check 
                  className="align-items-end mt-2"
                  type="switch"
                  id="custom-switch"
                  label="Pregunta Obligatoria"
                />
                <Button className="mt-2" variant="danger" onClick="">Eliminar Pregunta</Button>
              </Card.Body>
            </Card>
          <Button className="mt-4" onClick="">Nueva Pregunta</Button>
          <h3 className="mt-4">Vistas Previas</h3>



        </Container>
        
      );
}



  



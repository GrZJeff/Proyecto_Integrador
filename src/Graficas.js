
import React, { useState } from "react";
import { Card, Container, Form, Button } from 'react-bootstrap';

export const Graficas = () => {
    const [questions, setQuestions] = useState([]);
    const [responses, setResponses] = useState({});

    const handleAddQuestion = () => {
     
    };

    const handleResponseChange = (questionIndex, response) => {
        setResponses((prevResponses) => ({
            ...prevResponses,
            [questionIndex]: response,
        }));
    };

    // Datos para los gráficos
    const data = {
        labels: Object.keys(responses),
        datasets: [
            {
                label: 'Respuestas',
                data: Object.values(responses).map(r => r.length), // Usa  el valor según la respuesta
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <Container>
            <Card className="mt-4">
                <Card.Body>
                    <Card.Title className="text-center">Título del Cuestionario</Card.Title>
                    <Form.Control placeholder="Ingresa título del cuestionario" name="title" />
                    <Form.Control placeholder="Ingresa descripción del cuestionario" name="desc" className="mt-3" />
                </Card.Body>
            </Card>

           
            {questions.map((q, index) => (
                <Card key={index} className="mt-4">
                    <Card.Body>
                        <Form.Control 
                            placeholder="Ingresa tu pregunta" 
                            name={`pregunta-${index}`} 
                            value={q.text} 
                            onChange={(e) => handleResponseChange(index, e.target.value)}
                        />
                      
                    </Card.Body>
                </Card>
            ))}

            <Button className="mt-4" onClick={handleAddQuestion}>Nueva Pregunta</Button>

            {/* Gráfico de  las respuestas */}
            <h3 className="mt-4">Gráfico de Respuestas</h3>
        </Container>
    );
};



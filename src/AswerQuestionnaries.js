import { Card, Container } from "react-bootstrap"
import { useState } from "react"

export const AnswerQuestionnaries =()=>{
    const [questionnaire, setQuestionnarire] = useState(props.questionnaire)
    return(
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>{questionnaire.title}</Card.Title>
                    <Card.Text>{questionnaire.description}</Card.Text>
                    <hr/>
                    {
                        questionnaire.questions.map((question)=>(
                            <Form.Group>
                                <Form.Label>{question.title}</Form.Label>
                                {
                                    question.options.map((option)=>{
                                        ["checkbox","radio"].includes(question.type) && (
                                            <Form.Check
                                            type={question.type}
                                            label={option}
                                            />
                                        ) ||  question.type === "text" && (
                                            <Form.Control/>
                                         ||  question.type === "select" && (
                                            <Form.Select>
                                                <option></option>
                                                {question.options.map((option)=>
                                                <option>{option}</option>
                                                )}
                                            </Form.Select>
                                          )
                                        ) 
                                    })
                                }
                            </Form.Group>
                        ))
                    }
                </Card.Body>
            </Card>
        </Container>
    )
}

export default AnswerQuestionnaries;
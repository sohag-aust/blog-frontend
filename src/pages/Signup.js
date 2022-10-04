import React from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import Base from '../components/Base';

function Signup() {
    return (
        <Base>
            <Container>
                <Row className='mt-4'>
                    <Col sm={{size: 6, offset: 3}}>
                        <Card color='dark' inverse>
                            <CardHeader>
                                <h3>Fill Information to Register !!</h3>
                            </CardHeader>

                            <CardBody>
                                
                                {/* creating form */}
                                <Form>

                                    {/* name field */}
                                    <FormGroup>
                                        <Label for="name">
                                            Enter Name
                                        </Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder="Enter here"
                                        />
                                    </FormGroup>

                                    {/* email field */}
                                    <FormGroup>
                                        <Label for="email">
                                            Enter Email
                                        </Label>
                                        <Input
                                            id="email"
                                            type="text"
                                            placeholder="Enter here"
                                        />
                                    </FormGroup>

                                    {/* password field */}
                                    <FormGroup>
                                        <Label for="password">
                                            Enter Password
                                        </Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="Enter here"
                                        />
                                    </FormGroup>

                                    {/* about field */}
                                    <FormGroup>
                                        <Label for="about">
                                            About
                                        </Label>
                                        <Input
                                            id="about"
                                            type="textarea"
                                            placeholder="Enter here"
                                            style={{height: '250px'}}
                                        />
                                    </FormGroup>

                                    <Container className='text-center'>
                                        <Button outline color='primary'> Register </Button>
                                        <Button outline color='danger' className='ms-2' type='reset'> Reset </Button>
                                    </Container>

                                </Form>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Base>
    )
}

export default Signup;

import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap';
import Base from '../components/Base';
import { signUp } from '../services/userService';

function Signup() {
    const [data, setData] = useState({name: '', email: '', password: '', about: ''});
    const [error, setError] = useState({errors: {}, isError: false});

    const handleChange = (event) => {
        // not efficient code
        // if(event.target.id === "name") {
        //     setData({
        //         ...data,
        //         name: event.target.value
        //     });
        // }else if(event.target.id === "email") {
        //     setData({
        //         ...data,
        //         email: event.target.value
        //     });
        // }else if(event.target.id === "password") {
        //     setData({
        //         ...data,
        //         password: event.target.value
        //     });
        // }else if(event.target.id === "about") {
        //     setData({
        //         ...data,
        //         about: event.target.value
        //     });
        // }

        // efficient code
        setData({
            ...data,
            [event.target.id]: event.target.value
        });
    }

    const resetData = () => {
        setData({name: '', email: '', password: '', about: ''});
    }

    const submitForm = (event) => {
        event.preventDefault();

        console.log("Form Data: ", data);

        // data validation

        // call server api for sending the data
        signUp(data).then((res) => {
            console.log("Response after signup: ", res);
            toast.success("successfully signedup!!");
            resetData();
        }).catch((err) => {
            console.log("error on signup: ", err)

            // handle errors
            setError({
                errors: err,
                isError: true
            })
        });
    }

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
                                <Form onSubmit={submitForm}>

                                    {/* name field */}
                                    <FormGroup>
                                        <Label for="name">
                                            Enter Name
                                        </Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder="Enter here"
                                            onChange={handleChange}
                                            value={data?.name}
                                            invalid={error?.errors?.response?.data?.name ? true : false}
                                        />

                                        <FormFeedback>
                                            { error?.errors?.response?.data?.name }
                                        </FormFeedback>
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
                                            onChange={handleChange}
                                            value={data?.email}
                                            invalid={error?.errors?.response?.data?.email ? true : false}
                                        />

                                        <FormFeedback>
                                            { error?.errors?.response?.data?.email }
                                        </FormFeedback>
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
                                            onChange={handleChange}
                                            value={data?.password}
                                            invalid={error?.errors?.response?.data?.password ? true : false}
                                        />

                                        <FormFeedback>
                                            { error?.errors?.response?.data?.password }
                                        </FormFeedback>
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
                                            onChange={handleChange}
                                            value={data?.about}
                                            invalid={error?.errors?.response?.data?.about ? true : false}
                                        />

                                        <FormFeedback>
                                            { error?.errors?.response?.data?.about }
                                        </FormFeedback>
                                    </FormGroup>

                                    <Container className='text-center'>
                                        <Button outline color='primary' type='submit'> Register </Button>
                                        <Button outline color='danger' className='ms-2' type='reset' onClick={resetData}> Reset </Button>
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

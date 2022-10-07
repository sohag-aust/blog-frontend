import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { doLogin } from '../auth';
import Base from '../components/Base';
import { login } from '../services/userService';

function Login() {

    const [loginDetail, setLoginDetail] = useState({username: '', password: ''});

    const handleChange = (event, field) => {
        setLoginDetail({
            ...loginDetail,
            [field]: event?.target?.value
        });
    }

    const handleReset = () => {
        setLoginDetail({
            username: '',
            password: ''
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("==** Login Details: ", loginDetail);

        // validation
        if(loginDetail?.username?.trim() === "" || loginDetail?.password?.trim() === "") {
            toast.error("username/password is required");
            return ;
        }

        // submit data to server to generate token
        login(loginDetail)?.then((data) => {
            console.log("== token: ", data);
            toast.success("Login Success !!");

            // save the data to localStorage
            doLogin(data, () => {
                console.log(" login details is saved to localStorage ");

                // redirect to user dashboard page
            });

            handleReset();
        }).catch((error) => {
            console.log("== Error on login: ", error);
            toast.error("something went wrong !!");
        });

    }

    
    return (
        <Base>
            <Container>
                <Row className='mt-4'>
                    <Col sm={{size: 6, offset: 3}}>
                        <Card color='dark' inverse>
                            <CardHeader>
                                <h3>Login Here !!</h3>
                            </CardHeader>

                            <CardBody>
                                <Form onSubmit={handleSubmit}>
                                    {/* email field */}
                                    <FormGroup>
                                        <Label for="email">
                                            Enter Email
                                        </Label>
                                        <Input 
                                            type='text'
                                            id='email'
                                            value={loginDetail?.username}
                                            onChange={(e) => handleChange(e, 'username')}
                                        />
                                    </FormGroup>

                                    {/* password field */}
                                    <FormGroup>
                                        <Label for="password">
                                            Enter Password
                                        </Label>
                                        <Input 
                                            type='password'
                                            id='password'
                                            value={loginDetail?.password}
                                            onChange={(e) => handleChange(e, 'password')}
                                        />
                                    </FormGroup>

                                    <Container className='text-center'>
                                        <Button type='submit' outline color='primary'> Login </Button>
                                        <Button outline color='danger' className='ms-2' onClick={handleReset}> Reset </Button>
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

export default Login;

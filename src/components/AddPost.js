import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, Container, Form, Input, Label } from 'reactstrap';
import { loadAllCategories } from '../services/categoryService';

function AddPost() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        loadAllCategories().then((data) => {
            console.log("Post data: ", data);
            setCategories(data);
        }).catch(err => {
            console.log("Error on Post Data: ", err);
        })
    }, []);

    return (
        <div className='wrapper'>
            <Card className='shadow-sm mt-3'>
                <CardBody>
                    <h3> What going in your mind ?</h3>

                    <Form>
                        <div className='my-3'>
                            <Label for='title'>
                                Post Title
                            </Label>
                            <Input 
                                type='text' 
                                id='title' 
                                placeholder='Enter here'
                            />
                        </div>

                        <div className='my-3'>
                            <Label for='content'>
                                Post Content
                            </Label>
                            <Input 
                                type='textarea' 
                                id='content' 
                                placeholder='Enter here'
                                style={{height: '300px'}}
                            />
                        </div>

                        <div className='my-3'>
                            <Label for='category'>
                                Post Category
                            </Label>
                            <Input 
                                type='select' 
                                id='category' 
                            >
                                {
                                    categories?.map(category => (
                                        <option value={category?.categoryId} key={category?.categoryId}>
                                            {category?.title}
                                        </option>
                                    ))
                                }
                            </Input>
                        </div>

                        <Container className='text-center'>
                            <Button color='primary'>Create Post</Button>
                            <Button className='ms-2' color='danger'>Reset Content</Button>
                        </Container>
                    </Form>
                </CardBody>
            </Card>
        </div>
    )
}

export default AddPost;

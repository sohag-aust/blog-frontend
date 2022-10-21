import React, {useEffect, useRef, useState} from 'react';
import { Button, Card, CardBody, Container, Form, Input, Label } from 'reactstrap';
import { loadAllCategories } from '../services/categoryService';
import JoditEditor from 'jodit-react';
import {createPost} from "../services/postService";
import {getCurrentUserDetail} from "../auth";
import {toast} from "react-toastify";

function AddPost() {

    const [categories, setCategories] = useState([]);

    const editor = useRef(null);
    const [content, setContent] = useState('');

    const [user,setUser] = useState(undefined);

    const [post, setPost] = useState({
        title: '',
        content: '',
        categoryId: ''
    });

    const config = {
        placeholder: 'Start typing...'
    }

    useEffect(() => {
        setUser(getCurrentUserDetail());

        loadAllCategories().then((data) => {
            console.log("Post data: ", data);
            setCategories(data);
        }).catch(err => {
            console.log("Error on Post Data: ", err);
        })
    }, []);

    const fieldChanged = (event) => {
        setPost({
            ...post,
            [event.target.name]: event.target.value
        });
    }

    const handleContentChange = (contentData) => {
        setPost({
            ...post,
            'content': contentData
        });
    }

    const handleSubmitPost = (event) => {
        event.preventDefault();

        if(post?.title?.trim() === '') {
            alert("post title is required !!");
            return ;
        }

        if(post?.content?.trim() === '') {
            alert("post content is required !!");
            return ;
        }

        if(post?.categoryId === '') {
            alert("select a category !!");
            return ;
        }

        // createPost
        post['userId'] = user?.id;
        createPost(post)?.then(res => {
            toast.success("post created");
            setPost({
                title: '',
                content: '',
                categoryId: ''
            });
        }).catch(error =>  {
            toast.error("Error on creating post !!");
        });
    }

    return (
        <div className='wrapper'>
            <Card className='shadow-sm mt-3'>
                <CardBody>
                    <h3> What going in your mind ?</h3>

                    {/*{JSON.stringify(post)}*/}

                    <Form onSubmit={handleSubmitPost}>
                        <div className='my-3'>
                            <Label for='title'>
                                Post Title
                            </Label>
                            <Input
                                name='title'
                                type='text' 
                                id='title' 
                                placeholder='Enter here'
                                onChange={fieldChanged}
                            />
                        </div>

                        <div className='my-3'>
                            <Label for='content'>
                                Post Content
                            </Label>
                            {/*<Input */}
                            {/*    type='textarea' */}
                            {/*    id='content' */}
                            {/*    placeholder='Enter here'*/}
                            {/*    style={{height: '300px'}}*/}
                            {/*/>*/}

                            <JoditEditor
                                ref={editor}
                                value={content}
                                // config={config}
                                onChange={handleContentChange}
                            />
                        </div>

                        <div className='my-3'>
                            <Label for='category'>
                                Post Category
                            </Label>
                            <Input 
                                type='select' 
                                id='category'
                                name='categoryId'
                                onChange={fieldChanged}
                                defaultValue={0}
                            >
                                <option disabled value={0}>--Select Category--</option>
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
                            <Button type="submit" color='primary'>Create Post</Button>
                            <Button className='ms-2' color='danger'>Reset Content</Button>
                        </Container>
                    </Form>
                </CardBody>
            </Card>
        </div>
    )
}

export default AddPost;

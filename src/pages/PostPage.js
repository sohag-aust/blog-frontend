import React, {useEffect, useState} from 'react';
import Base from "../components/Base";
import {Link, useParams} from "react-router-dom";
import {Button, Card, CardBody, CardText, Col, Container, Input, Row} from "reactstrap";
import {loadPostById} from "../services/postService";
import {toast} from "react-toastify";
import moment from 'moment';
import {BASE_URL} from "../services/helper";
import {createComment} from "../services/commentService";
import {isLoggedIn} from "../auth";

const PostPage = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    const [comment, setComment] = useState({
        content: ""
    });

    useEffect(() => {
        // load post of postId
        loadPostById(postId)?.then(data => {
            console.log("==** Post by id: ", data);
            setPost(data);
        }).catch(err => {
            toast.error("Error on Fetching post by id !!");
        })
    }, [postId]);

    const handleComment = (event) => {
        setComment({
            content: event.target.value
        });
    }

    const submitComment = () => {

        if(!isLoggedIn()) {
            toast.error("Need to Login First !!");
            return ;
        }

        createComment(comment, post?.id)?.then(data => {
            toast.success("Comment added Successfully");

            setComment({
                content: ""
            });

            // for immediate update that post with latest comment
            setPost({
                ...post,
                comments: [
                    ...post?.comments,
                    data
                ]
            });
        }).catch(err => {
            toast.error(err);
        })
    }

    return (
        <Base>
            <Container className="mt-5">
                <Link to="/">Go To Home</Link>

                <Row>
                    <Col md={{
                        size: 12
                    }}>
                        <Card className="mt-4 ps-3">
                            <CardBody>
                                {/* converting new Date() backend result: 2022-07-18T07:34:23.149+00:00 (as example) to frontend moment: July 18th 2022, 1:34:23 pm using moment js */}
                                <CardText> Posted By <b> {post?.user?.name} </b> on <b> {moment(post?.added_date).format("MMMM Do YYYY, h:mm:ss a")} </b> ( convert date using momentJS ) </CardText>

                                {/* converting new Date() backend result: 2022-07-18T07:34:23.149+00:00 (as example) to frontend localeString: 7/18/2022, 1:34:23 PM using new Date(date).toLocaleString() */}
                                <CardText> Posted By <b> {post?.user?.name} </b> on <b> {new Date(post?.added_date).toLocaleString()} </b> ( convert date using toLocalString() ) </CardText>

                                <CardText>
                                    <span className='text-muted'> <b>Category : </b> &nbsp; {post?.category?.title} </span>
                                </CardText>

                                {/* adding a divider */}
                                <div className='divider' style={{
                                    width: '100%',
                                    height: '1px',
                                    background: '#e2e2e2'
                                }}>

                                </div>

                                <CardText className='mt-4'>
                                    <h3> {post?.title} </h3>
                                </CardText>

                                <div className='image-container mt-3 container text-center' style={{width: '50%'}}>
                                    <img style={{height: '500px'}} className='img-fluid' src={BASE_URL + `/post/image/${post?.image_name}`} alt="missing image" />
                                </div>

                                <CardText className='mt-5' dangerouslySetInnerHTML={{__html: post?.content}}>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col md={{
                        size: 9,
                        offset: 1
                    }}>

                        <h3>No.of Comments ( {post?.comments ? post?.comments?.length : 0} )</h3>
                        {
                            post?.comments && post?.comments?.map(comment => (
                                    <Card className='mt-2' key={comment?.id}>
                                        <CardBody>
                                            <CardText>
                                                {comment?.content}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                )
                            )
                        }

                        {
                            isLoggedIn() && <Card className='mt-4'>
                                <CardBody>
                                    <Input
                                        value={comment?.content}
                                        type="textarea"
                                        placeholder="Enter comment here"
                                        onChange={handleComment}
                                    />
                                    <Button onClick={submitComment} className="mt-2" color="primary">Submit</Button>
                                </CardBody>
                            </Card>
                        }
                    </Col>
                </Row>
            </Container>
        </Base>
    );
};

export default PostPage;
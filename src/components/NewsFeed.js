import React, {useEffect, useState} from 'react';
import {getAllPosts} from "../services/postService";
import {toast} from "react-toastify";
import {Col, Row} from "reactstrap";
import Post from "./Post";

const NewsFeed = () => {

    const [posts, setPosts] = useState({});

    useEffect(() => {
        // load all the posts from server
        getAllPosts()?.then(post => {
            setPosts(post);
        }).catch(err => {
            toast.error("Error Fetching Posts !!");
        });
    }, []);

    return (
        <div className="container-fluid">
            <Row>
                <Col
                    md={{
                        size: 10,
                        offset: 1
                    }}
                >
                    <h2> Blogs Count : ({posts?.totalElements}) </h2>
                    {
                        posts?.content?.map(post => <Post key={post?.id} post={post} />)
                    }
                </Col>
            </Row>
        </div>
    );
};

export default NewsFeed;
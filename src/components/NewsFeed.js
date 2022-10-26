import React, {useEffect, useState} from 'react';
import {getAllPosts} from "../services/postService";
import {toast} from "react-toastify";
import {Col, Container, Pagination, PaginationItem, PaginationLink, Row} from "reactstrap";
import Post from "./Post";

const NewsFeed = () => {

    const [posts, setPosts] = useState({
        content: [],
        totalPages: 0,
        totalElements: 0,
        pageNo: 0,
        pageSize: 0,
        lastPage: false
    });

    useEffect(() => {
        // load all the posts from server
        getAllPosts(0, 5)?.then(post => {
            setPosts(post);
        }).catch(err => {
            toast.error("Error Fetching Posts !!");
        });
    }, []);

    const handleChangePage = (pageNo=0, pageSize=5) => {


        getAllPosts(pageNo, pageSize)?.then(post => {
            setPosts(post);
            window.scroll(0,0);
        }).catch(err => {
            toast.error("Error Fetching Posts !!");
        });
    }

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

                    <Container className="text-center mt-3">
                        <Pagination>
                            <PaginationItem onClick={() => handleChangePage(posts?.pageNo - 1)} disabled={posts?.pageNo === 0}>
                                <PaginationLink previous>

                                </PaginationLink>
                            </PaginationItem>

                            {
                                [...Array(posts?.totalPages)]?.map((item, index) => ( // converting int number to Array for iteration
                                    <PaginationItem onClick={() => handleChangePage(index)} active={index === posts?.pageNo} key={index}>
                                        <PaginationLink>
                                            {index+1}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))
                            }

                            <PaginationItem onClick={() => handleChangePage(posts?.pageNo + 1)} disabled={posts?.lastPage}>
                                <PaginationLink next>

                                </PaginationLink>
                            </PaginationItem>
                        </Pagination>
                    </Container>
                </Col>
            </Row>
        </div>
    );
};

export default NewsFeed;
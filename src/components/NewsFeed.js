import React, {useEffect, useState} from 'react';
import {getAllPosts} from "../services/postService";
import {toast} from "react-toastify";
import {Col, Container, Pagination, PaginationItem, PaginationLink, Row} from "reactstrap";
import Post from "./Post";
import InfiniteScroll from "react-infinite-scroll-component";

const NewsFeed = () => {

    const [posts, setPosts] = useState({
        content: [],
        totalPages: 0,
        totalElements: 0,
        pageNo: 0,
        pageSize: 0,
        lastPage: false
    });

    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        // load all the posts from server
        handleChangePage(currentPage);
    }, [currentPage]);

    const handleChangePage = (pageNo=0, pageSize=5) => {
        // for lastPage next
        if(pageNo > posts?.pageNo && posts?.lastPage) {
            return ;
        }

        // for firstPage previous
        if(pageNo < posts?.pageNo && posts?.pageNo === 0) {
            return ;
        }

        getAllPosts(pageNo, pageSize)?.then(post => {
            console.log("==** loading post: ", post);

            const updatedPosts = [...posts?.content, ...post?.content];

            setPosts({
                content: [...updatedPosts],
                totalPages: post?.totalPages,
                totalElements: post?.totalElements,
                pageNo: post?.pageNo,
                pageSize: post?.pageSize,
                lastPage: post?.lastPage
            });


            // this one for normal pagination
            // setPosts(post);
            // window.scroll(0,0);
        }).catch(err => {
            toast.error("Error Fetching Posts !!");
        });
    }

    const handleChangePageInfinite = () => {
        console.log("=* Page Changed *=");

        // moving to next page with infinite scroll
        setCurrentPage(prev => prev + 1);
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

                    {/* infinite scroll instead of pagination */}
                    <InfiniteScroll next={handleChangePageInfinite}
                                    hasMore={!posts?.lastPage}
                                    loader={<h4>Loading...</h4>}
                                    dataLength={posts?.content?.length}
                                    endMessage={
                                        <p style={{ textAlign: 'center' }}>
                                            <b>Yay! You have seen it all</b>
                                        </p>
                                    }
                    >
                        {
                            posts?.content?.map((post, idx) => <Post key={idx} post={post} />)
                        }
                    </InfiniteScroll>

                    {/* pagination functionality */}
                    {/*<Container className="text-center mt-3">*/}
                    {/*    <Pagination>*/}
                    {/*        <PaginationItem onClick={() => handleChangePage(posts?.pageNo - 1)} disabled={posts?.pageNo === 0}>*/}
                    {/*            <PaginationLink previous>*/}

                    {/*            </PaginationLink>*/}
                    {/*        </PaginationItem>*/}

                    {/*        {*/}
                    {/*            [...Array(posts?.totalPages)]?.map((item, index) => ( // converting int number to Array for iteration*/}
                    {/*                <PaginationItem onClick={() => handleChangePage(index)} active={index === posts?.pageNo} key={index}>*/}
                    {/*                    <PaginationLink>*/}
                    {/*                        {index+1}*/}
                    {/*                    </PaginationLink>*/}
                    {/*                </PaginationItem>*/}
                    {/*            ))*/}
                    {/*        }*/}

                    {/*        <PaginationItem onClick={() => handleChangePage(posts?.pageNo + 1)} disabled={posts?.lastPage}>*/}
                    {/*            <PaginationLink next>*/}

                    {/*            </PaginationLink>*/}
                    {/*        </PaginationItem>*/}
                    {/*    </Pagination>*/}
                    {/*</Container>*/}
                </Col>
            </Row>
        </div>
    );
};

export default NewsFeed;
import React from 'react';
import {Button, Card, CardBody, CardText} from "reactstrap";

const Post = ({post}) => {
    console.log("post: ", post);

    return (
        <Card className="border-0 shadow-sm mt-4">
            <CardBody>
                <h3> {post?.title} </h3>
                <CardText dangerouslySetInnerHTML={{__html: post?.content?.substring(0,20)}}>
                </CardText>

                <div>
                    <Button> Read More </Button>
                </div>
            </CardBody>
        </Card>
    );
};

export default Post;
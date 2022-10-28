import React from 'react';
import {Card, CardBody, CardText} from "reactstrap";
import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id, title, content} = post;

    return (
        <Card className="border-0 shadow-sm mt-4">
            <CardBody>
                <h3> {title} </h3>
                <CardText dangerouslySetInnerHTML={{__html: content?.substring(0,20)}}>
                </CardText>

                <div>
                    <Link className='btn btn-secondary border-0' to={`/post/${id}`}> Read More </Link>
                </div>
            </CardBody>
        </Card>
    );
};

export default Post;
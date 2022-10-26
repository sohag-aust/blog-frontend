import React from 'react';
import { Container } from 'reactstrap';
import AddPost from '../components/AddPost';
import Base from '../components/Base';
import NewsFeed from "../components/NewsFeed";

function UserDashboard() {
    return (
        <Base>
            <Container>
                <AddPost />
            </Container>
        </Base>
    )
}

export default UserDashboard;

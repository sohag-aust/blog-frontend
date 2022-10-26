import React, {useEffect} from 'react'
import Base from '../components/Base';
import NewsFeed from "../components/NewsFeed";
import {Container} from "reactstrap";

function Home() {
    return (
        <Base>
            <Container className="mt-4">
                <NewsFeed />
            </Container>
        </Base>
    )
}

export default Home;

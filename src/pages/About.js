import React from 'react'
import Base from '../components/Base';
import {UserContext} from "../context/UserContext";

function About() {

    return (
        <UserContext.Consumer>
            {
                (user) => (
                    <Base>
                        <h1> This is About Page </h1>
                        <p> We are building blog website </p>
                        <h3> Welcome user : {user?.name} </h3>
                    </Base>
                )
            }
        </UserContext.Consumer>
    )
}

export default About;

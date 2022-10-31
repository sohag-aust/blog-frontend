import React from 'react';
import Base from '../components/Base';
import {UserContext} from "../context/UserContext";

function Services() {
    return (
        <UserContext.Consumer>
            {
                (user) => (
                    <Base>
                        <h1> This is services page </h1>
                        <h3> User name from Context API : {user?.name} </h3>
                    </Base>
                )
            }
        </UserContext.Consumer>
    )
}

export default Services;

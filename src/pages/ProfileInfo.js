import React, {useContext} from 'react';
import Base from '../components/Base';
import {UserContext} from "../context/UserContext";

function ProfileInfo() {
    const user = useContext(UserContext);

    return (
        <Base>
            <div>
                <h1>This is user profile page</h1>
                <h3> User name using useContext Hook : {user?.name} </h3>
            </div>
        </Base>
    )
}

export default ProfileInfo;

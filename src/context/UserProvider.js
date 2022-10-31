import React, {useEffect, useState} from 'react';
import {UserContext} from "./UserContext";

const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        name: 'Ashraful'
    });

    useEffect(() => {
        setUser({
            name: 'Ashraful Islam Shohag'
        });
    }, []);

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
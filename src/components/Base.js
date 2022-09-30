import React from 'react';
import CustomNavbar from './CustomNavbar';

function Base({title="Welcome to Blog Application", children}) {
    return (
        <div className="container-fluid p-0 m-0">
            <CustomNavbar />

                {children}
                
            <h1> This is footer </h1>
        </div>
    )
}

export default Base;

import React from 'react';
import CustomNavbar from './CustomNavbar';
import Footer from "../pages/Footer";

function Base({title="Welcome to Blog Application", children}) {
    return (
        <div className="container-fluid p-0 m-0">
            <CustomNavbar />

                {children}
                
            <Footer />
        </div>
    )
}

export default Base;

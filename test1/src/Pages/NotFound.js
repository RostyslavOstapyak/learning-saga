import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontSize: '50px', color: 'red', minHeight: '90vh' }}>
            404 Not Found

            <Link to='/blog'>
                Bether take a look at blog
            </Link>
        </div>
    );
};

export default NotFound;
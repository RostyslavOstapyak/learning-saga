import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Blog.css'

const Blog = () => {
    const dispatch = useDispatch();
    const blogData = useSelector(store => store.app.blog)

    console.log(blogData);
    if (!Array.isArray(blogData)) {
        return <h5>Loading...</h5>
    }
    return (
        <>
            <div className='blog-container'>
                <span >Alexandr Blog</span>
                <img src="http://www.rewizor.ru/files/204718yu8u.jpg" alt='Blog' />
                <button onClick={() => { dispatch({ type: 'LOAD_SOME_DATA' }) }}>Load some Data</button>
                <Link to="/">
                    Home Page
                </Link>
            </div>
            <ul>
                {blogData.map(item => <li key={item.name}>{item.name} .......:...... {item.model}</li>)}
            </ul>
        </>
    );
};

export default Blog;
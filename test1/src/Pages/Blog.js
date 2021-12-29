import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Blog.css'

const Blog = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'LOAD_BLOG_DATA' })
    })

    return (
        <div className='blog-container'>
            <span >Alexandr Blog</span>
            <img src="http://www.rewizor.ru/files/204718yu8u.jpg" alt='Blog' />
            <Link to="/">
                Home Page
            </Link>
        </div>
    );
};

export default Blog;
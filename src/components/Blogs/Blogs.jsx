import PropTypes from 'prop-types';
import  { useState, useEffect } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {

const [blogs, setblogs] = useState([]);

useEffect(() =>{
    fetch('blogs.json')
    .then(res =>res.json())
    .then(data =>setblogs(data))
},[]);



    return (
        <div className='w-2/3'>
            {
                blogs.map(data => <Blog
                data ={data}
                key={data.id}
                ></Blog>)
            }
        </div>
    );
};


Blogs.proptypes = {
    blog: PropTypes.object.isRequired
}
export default Blogs;
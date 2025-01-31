import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BlogList.css';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blog/');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setError('Failed to fetch blogs');
      }
    };

    fetchBlogs();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  const truncateContent = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + '...'; // Truncate and add ellipsis
    }
    return content; // Return full content if it's shorter than maxLength
  };

  return (
    <div className="blog-list">
      <h1>Blog Posts</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog._id}>
            <h2>{blog.title}</h2>
            <p>{truncateContent(blog.content, 100)}</p> {/* Show truncated content */}
            <p><strong>Author:</strong> {blog.author}</p>
            <p><em>Date:</em> {new Date(blog.date).toLocaleDateString()}</p>
            <Link to={`/blog/${blog._id}`} className='read-more'>Read More</Link> {/* Link to BlogDetail */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;

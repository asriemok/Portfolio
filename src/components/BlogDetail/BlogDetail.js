import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './BlogDetail.css'; // Import the CSS file

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blog/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
        setError('Failed to fetch blog');
      }
    };

    fetchBlog();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="blog-detail">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <p><strong>Author:</strong> {blog.author}</p>
      <p><em>Date:</em> {new Date(blog.date).toLocaleDateString()}</p>
      {/* <Link onClick={() => navigate(-1)} className="less">
        Less
      </Link> */}
       <Link to={`/blog`} className='read-more'>Back to List</Link> {/* Link to BlogDetail */}

    </div>
  );
};

export default BlogDetail;

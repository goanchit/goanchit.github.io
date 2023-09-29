import React from 'react';
import Layout from '../layout';
import { BlogPost } from '../constants/blog';
import { TitleWrapper } from '../layout/styles';

const Blog = () => {
    return (
        <Layout>
            <TitleWrapper>Blog Posts</TitleWrapper>
            {
                BlogPost.map((blog) => {
                return (
                    <>
                    <h3>{blog.Title}</h3>
                    <h5>{blog.Description}</h5>
                    </>
                )
                })
            }
        </Layout>
    )
}

export default Blog;
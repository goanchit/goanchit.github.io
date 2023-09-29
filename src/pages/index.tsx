import * as React from "react";
import type { HeadFC } from "gatsby";
import "../styles.css";
import { styled } from "@mui/system";
import { Container } from "@mui/material";
import Layout from "../layout";
import { BlogPost } from "../constants/blog";
import { TitleWrapper } from "../layout/styles";

const BlogListBlock = styled('div')({
  paddingTop: "20px",
});

const IndexPage = () => {
  return (
    <Layout>
        <TitleWrapper>
          Helloooooooooooooo fellow reader welcome to my blog post
        </TitleWrapper>
        <BlogListBlock>
          {
            BlogPost.slice(0, 5).map((blog) => {
              return (
                <>
                  <h3>{blog.Title}</h3>
                  <h5>{blog.Description}</h5>
                </>
              )
            })
          }
        </BlogListBlock>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Welcome To Blog</title>;

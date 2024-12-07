import React from "react";
import Label from "../components/Label";
import Button from "../components/Button";

const Blog = () => {
  return (
    <>
      <Label title="Blog" />
      <p className="my-blog">
        Visit my blog!
      </p>
      <p className="blog-text">
        I write a blog as a memo of my learning on <span>Dev.to</span>.<br />
        Feel free to visit my blog!
      </p>
      <Button title="My Blog" pass="https://dev.to/rockyueno0223" target="_blank"/>
    </>
  )
}
export default Blog;

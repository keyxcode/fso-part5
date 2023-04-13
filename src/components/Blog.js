import { useState } from "react";

const Blog = ({ blog, username, likeBlog }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5,
  };

  const [visible, setVisible] = useState(false);

  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const handleClickLike = () => {
    const updatedBlog = {
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: blog.likes + 1,
    };
    likeBlog(blog.id, updatedBlog);
  };

  return (
    <div style={blogStyle}>
      <div>
        {blog.title} {blog.author}
        <button onClick={toggleVisibility}>{visible ? "hide" : "view"}</button>
      </div>
      <div style={showWhenVisible}>
        <div>{blog.url}</div>
        <div>
          likes {blog.likes} <button onClick={handleClickLike}>like</button>{" "}
        </div>
        <div>{username}</div>
      </div>
    </div>
  );
};

export default Blog;

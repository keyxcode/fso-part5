import { useState, useEffect } from "react";
import Blog from "./components/Blog";
import LoginForm from "./components/LoginForm";
import blogService from "./services/blogs";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("hi");
  };

  return (
    <div>
      <LoginForm
        username={username}
        setUsername={setusername}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
      <h2>blogs</h2>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default App;

const BlogForm = () => (
  <form>
    <h2>create new</h2>
    <div>
      title
      <input type="text" />
    </div>
    <div>
      author
      <input type="text" />
    </div>
    <div>
      url
      <input type="text" />
    </div>
    <button type="submit">create</button>
  </form>
);

export default BlogForm;

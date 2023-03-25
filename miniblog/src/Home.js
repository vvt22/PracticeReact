import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs, setBlogs] = useState(null); //instead we can use [] in place of null
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  useEffect(() => {
    fetch("http://localhost:3004/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);
  //props is been passed through bloglist

  return (
    <div className="home">
      {blogs && ( //conditional templating or dynamic checking(logical and)
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default Home;

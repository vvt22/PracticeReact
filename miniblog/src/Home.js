import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "navi", id: 1 },
    {
      title: "Welcome party!",
      body: "lorem ipsum...",
      author: "vineet",
      id: 2,
    },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "shashi",
      id: 3,
    },
  ]);
  //props is been passed through bloglist

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
  );
};

export default Home;

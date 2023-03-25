import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("http://localhost:3004/blogs");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading</div>}
      {blogs && ( //conditional templating or dynamic checking(logical and)
        <BlogList blogs={blogs} title="All Blogs" />
      )}
    </div>
  );
};

export default Home;

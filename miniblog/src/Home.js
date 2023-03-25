import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs, setBlogs] = useState(null); //instead we can use [] in place of null
  const [isPending, setisPending] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3004/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
        setisPending(false);
      });
  }, []);
  //props is been passed through bloglist
  //check the below ....loading div..... using settimeout
  //or
  // Just to Note, on Chrome in the "Network" tab
  // you will see the option selected as "No throttling",
  // change it to "Slow 3G" or "Fast 3G".
  //or
  // Another way we can use the json-server delay option to simulate the 1 second timeout:
  // npx json-server --watch data/db.json --port 8000 --delay 1000

  return (
    <div className="home">
      {isPending && <div>Loading</div>}
      {blogs && ( //conditional templating or dynamic checking(logical and)
        <BlogList blogs={blogs} title="All Blogs" />
      )}
    </div>
  );
};

export default Home;

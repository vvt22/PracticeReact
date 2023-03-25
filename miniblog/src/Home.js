import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs, setBlogs] = useState(null); //instead we can use [] in place of null
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3004/blogs")
      .then((res) => {
        if (!res.ok) {
          // error coming back from server
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
        setisPending(false);
        setError(null);
      })
      .catch((err) => {
        // auto catches network / connection error
        setisPending(false);
        setError(err.message);
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
      {error && <div>{error}</div>}
      {isPending && <div>Loading</div>}
      {blogs && ( //conditional templating or dynamic checking(logical and)
        <BlogList blogs={blogs} title="All Blogs" />
      )}
    </div>
  );
};

export default Home;

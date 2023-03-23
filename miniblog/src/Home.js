import { useState } from "react";
const Home = () => {
  const [name, setName] = useState("nikhil"); //syntax for usestate
  const [age, setAge] = useState(21);
  const handleClick = () => {
    setName("rohit"); //used as function to change the state of the variable
    setAge(25);
  };

  return (
    <div className="home">
      <h2>Home page</h2>
      <p>
        {name} is {age} year old
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;

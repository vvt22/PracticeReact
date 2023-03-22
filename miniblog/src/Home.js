const Home = () => {
  const handleClick = (e) => {
    console.log("hello ninjas", e);
  };

  const handleClickAgain = (name, e) => {
    console.log("hello " + name, e.target);
  };
  return (
    <div className="home">
      <h2>Home page</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain("mario", e)}>
        Click me again
      </button>
      {/* used when to pass a argument to function */}
    </div>
  );
};

export default Home;

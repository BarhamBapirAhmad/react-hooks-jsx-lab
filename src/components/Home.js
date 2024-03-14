import React from "react";
import { name, city } from "../data/data.js";
 function Home() {
  // update the JSX being returned!

  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {name} is a Web Developer from {city}
      </h1>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" style={{ width: "100%" }} />
    </div>
  );

}

export default Home;

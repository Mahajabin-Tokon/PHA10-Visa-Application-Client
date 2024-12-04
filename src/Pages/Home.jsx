import React from "react";
import Banner from "../Components/Banner";
import Feedback from "../Components/Feedback";
import Success from "../Components/Success";

const Home = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto my-2 px-2">
        <Banner></Banner>
      </div>
      <div className="max-w-6xl mx-auto my-2 px-2">
        <div className="text-center text-4xl">Latest Visas</div>
      </div>
      <div className="max-w-6xl mx-auto my-2 px-2">
        <Success></Success>
      </div>
      <div className="max-w-6xl mx-auto my-10 px-2">
        <div className="text-center text-4xl">Feedback</div>
        <Feedback></Feedback>
      </div>
    </div>
  );
};

export default Home;

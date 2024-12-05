import React, { useContext } from "react";
import Banner from "../Components/Banner";
import Feedback from "../Components/Feedback";
import Success from "../Components/Success";
import LatestVisa from "../Components/LatestVisa";
import { authContext } from "../AuthProvider/AuthProvider";
import { useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const { isDark } = useContext(authContext);
  const [text] = useTypewriter({
    words: ["Best", "Visa", "Application site!"],
    loop: 0,
  });
  return (
    <div className={`${isDark ? "bg-black" : ""}`}>
      <div className="max-w-6xl mx-auto my-2 px-2">
        <div className="text-center text-4xl py-10">Welcome to {text}</div>
        <Banner></Banner>
      </div>
      <div className="max-w-6xl mx-auto my-2 px-2 py-10">
        <div className="text-center text-4xl">Latest Visas</div>
        <LatestVisa></LatestVisa>
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

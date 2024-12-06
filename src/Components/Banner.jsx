import React from "react";
import bp1 from "../assets/bp1.jpg";
import bp2 from "../assets/bp2.jpg";
import bp3 from "../assets/bp3.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full rounded-3xl">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <img src={bp1} className="md:w-1/2 h-96" />
          <p className="md:w-1/2 md:text-3xl p-5 md:pr-20">
            This is one stop location to get the best service for adding and applying for visas
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <img src={bp2} className="md:w-1/2 h-96" />
          <p className="md:w-1/2 md:text-3xl p-5 md:pr-20">
            It is super easy! Create an account and navigate to the add Visa Page and add a visa and then apply
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <img src={bp3} className="md:w-1/2 h-96" />
          <p className="md:w-1/2 md:text-3xl p-5 md:pr-20">
            Not sure which visa to apply for, check out our latest visas below to see what is popular
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;

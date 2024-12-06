import React from "react";

const Success = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      <div className="flex flex-col justify-center items-center border-2 py-4 rounded-3xl">
        <img
          width="200"
          height="200"
          className="rounded-3xl"
          src="https://i.ibb.co/8B1wJD5/con1.jpg"
          alt="Consultant image"
        />
        <p className="font-bold">Alex Johnson</p>
        <p>10 years experience in visa processing</p>
      </div>
      <div className="flex flex-col justify-center items-center border-2 py-4 rounded-3xl">
      <img
          width="200"
          height="200"
          className="rounded-3xl"
          src="https://i.ibb.co/6rzcm8L/con2.jpg"
          alt="Consultant image"
        />
        <p className="font-bold">Sherlock Holmes</p>
        <p>CEO, started company in 1990</p>
      </div>
      <div className="flex flex-col justify-center items-center border-2 py-4 rounded-3xl">
      <img
          width="200"
          height="200"
          className="rounded-3xl"
          src="https://i.ibb.co/phkbWFW/consultant1.jpg"
          alt="Consultant image"
        />
        <p className="font-bold">Sarah White</p>
        <p>15 years experience in managing clients</p>
      </div>
    </div>
  );
};

export default Success;

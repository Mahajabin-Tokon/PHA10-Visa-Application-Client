import React from "react";
import { useLoaderData } from "react-router-dom";

const AllVisas = () => {
  const data = useLoaderData();
  return (
    <div className="max-w-6xl mx-auto my-2 px-2 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2" >
        {data.map((eachVisa) => (
          <div className="card card-compact bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{eachVisa.countryName}</h2>
              <p>{eachVisa.description}</p>
              <p>{eachVisa.visaType}</p>
              <div className="card-actions justify-end">
                <button className="btn">See Detials</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVisas;

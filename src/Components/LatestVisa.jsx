import React from "react";
import { useEffect, useState } from "react";

const LatestVisa = () => {
  const [visas, setVisas] = useState();
  useEffect(() => {
    fetch("http://localhost:5001/latestVisas")
      .then((res) => res.json())
      .then((data) => setVisas(data));
  }, [visas]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5">
      {visas?.map((eachVisa) => (
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              src={eachVisa.countryImage}
              alt="Country Image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{eachVisa.countryName}</h2>
            <p>{eachVisa.visaType}</p>
            <p>{eachVisa.processingTime}</p>
            <p>{eachVisa.fee}</p>
            <p>{eachVisa.validity}</p>
            <p>{eachVisa.applicationMethod}</p>
            <div className="card-actions justify-end">
              <button className="btn">See Detials</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestVisa;

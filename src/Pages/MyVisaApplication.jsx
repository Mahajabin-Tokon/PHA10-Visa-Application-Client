import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const MyVisaApplication = () => {
  const { user } = useContext(authContext);
  const [visas, setVisas] = useState();
  const [appliedVisas, setAppliedVisas] = useState();

  useEffect(() => {
    fetch(`http://localhost:5001/myAddedVisas?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setVisas(data));

    fetch(`http://localhost:5001/myAppliedVisas`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto my-2 px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5 ">
        {appliedVisas?.map((eachVisa) => (
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img src={eachVisa.countryImage} alt="Country Image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{eachVisa.countryName}</h2>
              <p>{eachVisa.visaType}</p>
              <p>{eachVisa.processingTime}</p>
              <p>{eachVisa.fee}</p>
              <p>{eachVisa.validity}</p>
              <p>{eachVisa.applicationMethod}</p>
              <div className="card-actions justify-end">
                <Link className="btn">Cancel</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyVisaApplication;

import React from "react";
import { useLoaderData } from "react-router-dom";

const VisaDetails = () => {
  const data = useLoaderData();
  const { _id } = data;

  return (
    <div className="max-w-6xl mx-auto my-2 px-2 py-10">
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure className="h-80">
          <img src={data.countryImage} alt="Country Image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.countryName}</h2>
          <p>{data.visaType}</p>
          <p>{data.processingTime}</p>
          {data.requiredDoc.map((eachData) => <p>{eachData}</p>)}
          <p>{data.description}</p>
          <p>{data.age}</p>
          <p>{data.fee}</p>
          <p>{data.validity}</p>
          <p>{data.applicationMethod}</p>
          <p>{data.applied}</p>
          <div className="card-actions justify-end">
            <button className="btn">Apply for Visa</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaDetails;

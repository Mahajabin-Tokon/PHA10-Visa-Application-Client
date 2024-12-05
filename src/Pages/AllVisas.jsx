import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllVisas = () => {
  const data = useLoaderData();
  const [visas, setVisas] = useState(data);

  const filter = (type) => {
    if (type === "tourist") {
      const filteredData = data.filter(
        (visa) => visa.visaType === "Tourist visa"
      );
      setVisas(filteredData);
    } else if (type === "student") {
      const filteredData = data.filter(
        (visa) => visa.visaType === "Student visa"
      );
      setVisas(filteredData);
    } else if (type === "official") {
      const filteredData = data.filter(
        (visa) => visa.visaType === "Official visa"
      );
      setVisas(filteredData);
    } else {
      setVisas(data)
    }
  };

  return (
    <div className="max-w-6xl mx-auto my-2 px-2 py-10">
      <details className="dropdown">
        <summary className="btn m-1">Filter</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li>
            <a onClick={() => filter("all")}>All</a>
          </li>
          <li>
            <a onClick={() => filter("tourist")}>Tourist visa</a>
          </li>
          <li>
            <a onClick={() => filter("student")}>Student visa</a>
          </li>
          <li>
            <a onClick={() => filter("official")}>Official visa</a>
          </li>
        </ul>
      </details>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {visas.map((eachVisa) => (
          <div className="card card-compact bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{eachVisa.countryName}</h2>
              <p>{eachVisa.description}</p>
              <p>{eachVisa.visaType}</p>
              <div className="card-actions justify-end">
                <Link to={`/visaDetails/${eachVisa._id}`} className="btn">
                  See Detials
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVisas;

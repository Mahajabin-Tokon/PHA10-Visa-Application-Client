import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const MyVisaApplication = () => {
  const { user } = useContext(authContext);

  const [appliedVisas, setAppliedVisas] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5001/myAddedVisas?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        const matchedData = data.filter((eachData) => eachData.applied);
        setAppliedVisas(matchedData);
      });
  }, [search]);

  const handleDel = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5001/myAddedVisas/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = appliedVisas.filter((visa) => visa._id != _id);
              setAppliedVisas(remaining);
            }
          });
      }
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const search = event.target.search.value;
    // console.log(event.target.search.value);
    const remaining = appliedVisas.filter(
      (visa) => visa.countryName == search
    );
    setAppliedVisas(remaining);
  };

  console.log(search);

  return (
    <div className="max-w-6xl mx-auto my-2 px-2">
      <form onSubmit={handleSearch}>
        <div className="py-2">
          <div className="w-full">
            <p>Search</p>
            <input
              name="search"
              type="text"
              placeholder="Search"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="py-4">
          <input
            type="submit"
            value="Search"
            className="btn w-full bg-cyan-300"
          />
        </div>
      </form>
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
              <p>{eachVisa.applied.email}</p>
              <p>
                {eachVisa.applied.firstName} {eachVisa.applied.lastName}
              </p>
              <p>{eachVisa.applied.date}</p>
              <div className="card-actions justify-end">
                <Link
                  onClick={() => {
                    handleDel(eachVisa._id);
                  }}
                  className="btn"
                >
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyVisaApplication;

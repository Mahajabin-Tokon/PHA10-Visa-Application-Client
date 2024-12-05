import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Modal from "../Components/Modal";

const MyAddedVisas = () => {
  const { user } = useContext(authContext);

  const [visas, setVisas] = useState();
  const [selectedID, setSelectedID] = useState();
  //   const { _id } = visas;
  useEffect(() => {
    fetch(`http://localhost:5001/myAddedVisas?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setVisas(data));
  }, []);

  const handleUpdate = (_id) => {
    document.getElementById("my_modal_1").showModal();
    setSelectedID(_id)
  };

  const handleDelete = (_id) => {
    // console.log(_id);
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
              const remaining = visas.filter((visa) => visa._id != _id);
              setVisas(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto my-2 px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5 ">
        {visas?.map((eachVisa) => (
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
                <Link
                  onClick={() => {
                    handleUpdate(eachVisa._id);
                  }}
                  className="btn"
                >
                  Update
                </Link>
                <Link
                  onClick={() => {
                    handleDelete(eachVisa._id);
                  }}
                  className="btn"
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal id={selectedID} setVisas={setVisas}></Modal>
    </div>
  );
};

export default MyAddedVisas;

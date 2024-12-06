import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const VisaDetails = () => {
  const { user } = useContext(authContext);
  const data = useLoaderData();
  const { _id } = data;
  const handleApplyModal = () => {
    document.getElementById("applyModal").showModal();
  };

  const handleApply = () => {
    event.preventDefault();
    document.getElementById("applyModal").close();
    const form = event.target;
    const email = form.email.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const date = form.date.value;
    const fee = form.fee.value;
    const visaID = _id
    const appliedInfo = { visaID, email, firstName, lastName, date, fee };
    console.log(appliedInfo);

    fetch(`https://visa-server-five.vercel.app/myAddedVisas/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appliedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Visa Applied Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          
        }
      });
  };

  return (
    <div className="max-w-6xl mx-auto my-2 px-2 py-10">
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure className="h-80">
          <img src={data?.countryImage} alt="Country Image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data?.countryName}</h2>
          <p>{data?.visaType}</p>
          <p>{data?.processingTime}</p>
          {data?.requiredDoc.map((eachData) => (
            <p>{eachData}</p>
          ))}
          <p>{data?.description}</p>
          <p>{data?.age}</p>
          <p>{data?.fee}</p>
          <p>{data?.validity}</p>
          <p>{data?.applicationMethod}</p>
          <p>{data?.applied.date}</p>
          <p>{data?.applied.firstName}</p>
          <p>{data?.applied.lastName}</p>
          <p>{data?.applied.email}</p>
          <div className="card-actions justify-end">
            <button onClick={handleApplyModal} className="btn">
              Apply for Visa
            </button>
          </div>
        </div>
      </div>

      {/* Apply Button Modal */}
      <dialog id="applyModal" className="modal">
        <div className="modal-box w-full">
          <form
            className="w-full mx-auto bg-[#F4F3F0] rounded-lg py-10"
            onSubmit={handleApply}
          >
            {/* Field 1 */}
            <div className="px-10 py-2">
              <div className="w-full">
                <p>Email</p>
                <input
                  defaultValue={user?.email}
                  name="email"
                  type="text"
                  placeholder="Email"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            {/* Field 2 */}
            <div className="px-10 py-2">
              <div className="w-full">
                <p>First Name</p>
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            {/* Field 3 */}
            <div className="px-10 py-2">
              <div className="w-full">
                <p>Last Name</p>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            {/* Field 4 */}
            <div className="px-10 py-2">
              <div className="w-full">
                <p>Applied Date</p>
                <input
                  defaultValue={new Date().toISOString().substr(0, 10)}
                  name="date"
                  type="date"
                  placeholder="Applied Date"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            {/* Field 5 */}
            <div className="px-10 py-2">
              <div className="w-full">
                <p>Fee</p>
                <input
                  defaultValue={data?.fee}
                  name="fee"
                  type="text"
                  placeholder="Fee"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            <div className="px-10 py-4">
              <input
                type="submit"
                value="Apply"
                className="btn w-full btn-success"
              />
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default VisaDetails;

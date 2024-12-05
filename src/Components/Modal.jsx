import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Modal = ({ id, setSelected }) => {
  //   const [visas, setVisas] = useState();

  const handleModaleUpdate = (event) => {
    event.preventDefault();
    document.getElementById('my_modal_1').close()
    const form = event.target;
    const countryImage = form.countryImage.value;
    const countryName = form.countryName.value;
    const visaType = form.visaType.value;
    const processingTime = form.processingTime.value;

    let requiredDoc = [];
    document.querySelectorAll('[type="checkbox"]').forEach((box) => {
      if (box.checked) {
        requiredDoc.push(box.value);
      }
    });

    // const validPassport = form.validPassport.value;
    // const visaApplication = form.visaApplication.value;
    // const recentPhoto = form.recentPhoto.value;

    const description = form.description.value;
    const age = form.age.value;
    const fee = form.fee.value;
    const validity = form.validity.value;
    const applicationMethod = form.applicationMethod.value;
    const applied = false;

    const visa = {
      countryImage,
      countryName,
      visaType,
      processingTime,
      requiredDoc,
      description,
      age,
      fee,
      validity,
      applicationMethod,
      applied,
    };
    // Send data to server
    fetch(`http://localhost:5001/myAddedVisas/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(visa),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            
            Swal.fire({
              title: "Success!",
              text: "Visa Updated Successfully!",
              icon: "success",
              confirmButtonText: "Cool",
            });
            // navigate("/");
          }
        });
    // setSelected(visa)
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        open modal
      </button> */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box w-full">
          <p>{id}</p>
          <form
            className="w-full mx-auto bg-[#F4F3F0] rounded-lg py-10"
            onSubmit={handleModaleUpdate}
          >
            {/* Field 1 */}
            <div className="px-10 py-2">
              <div className="w-full">
                <p>Country Image</p>
                <input
                  name="countryImage"
                  type="text"
                  placeholder="Country Image"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            {/* Field 2 */}
            <div className="px-10 py-2">
              <div className="w-full">
                <p>Country Name</p>
                <input
                  name="countryName"
                  type="text"
                  placeholder="Country Name"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            {/* Field 3 */}
            <div className="px-10 py-2">
              <div className="w-full">
                <p>Visa Type</p>
                <select
                  className="select select-bordered w-full"
                  name="visaType"
                >
                  <option value="Tourist visa">Tourist visa</option>
                  <option value="Student visa">Student visa</option>
                  <option value="Official visa">Official visa</option>
                </select>
              </div>
            </div>

            {/* Field 4 */}
            <div className="px-10 py-2">
              <div className="w-full">
                <p>Processing Time</p>
                <input
                  name="processingTime"
                  type="text"
                  placeholder="Processing Time"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            {/* Field 5 */}
            <div className="px-10 py-2">
              <div className="w-full">
                <p>Required Documents</p>
                <div className="flex flex-col justify-between">
                  <div className="space-x-2">
                    <input
                      type="checkbox"
                      id="c1"
                      name="validPassport"
                      value="Valid passport"
                    />
                    <label for="c1">Valid passport</label>
                  </div>
                  <div className="space-x-2">
                    <input
                      type="checkbox"
                      id="c2"
                      name="visaApplication"
                      value="Visa application form"
                    />
                    <label for="c2">Visa application form</label>
                  </div>
                  <div className="space-x-2">
                    <input
                      type="checkbox"
                      id="c3"
                      name="recentPhoto"
                      value="Recent passport-sized photograph"
                    />
                    <label for="c3">Recent passport-sized photograph</label>
                  </div>
                </div>
              </div>
            </div>
            {/* Field 6 */}
            <div className="px-10 py-2">
              <div className="w-full">
                <p>Description</p>
                <input
                  name="description"
                  type="text"
                  placeholder="Description"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            {/* Field 7 */}
            <div className="px-10 py-2">
              <div className="w-full">
                <p>Age</p>
                <input
                  name="age"
                  type="number"
                  placeholder="Age"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            {/* Field 8 */}
            <div className="px-10 py-2">
              <div className="w-full">
                <p>Fee</p>
                <input
                  name="fee"
                  type="number"
                  placeholder="Fee"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            {/* Field 9 */}
            <div className="px-10 py-2">
              <div className="w-full">
                <p>Validity</p>
                <input
                  name="validity"
                  type="text"
                  placeholder="Validity"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            {/* Field 10 */}
            <div className="px-10 py-2">
              <div className="w-full">
                <p>Application Method</p>
                <input
                  name="applicationMethod"
                  type="text"
                  placeholder="Application Method"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            <div className="px-10 py-4">
              <input
                type="submit"
                value="Update Visa"
                className="btn w-full bg-cyan-300"
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

export default Modal;

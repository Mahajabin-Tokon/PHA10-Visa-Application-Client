import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { authContext } from "../AuthProvider/AuthProvider";

const Modal = ({
  id,
  setVisas,
  selectedData,
  validPassport,
  setValidPassport,
  applicationForm,
  setApplicationForm,
  recentPhoto,
  setRecentPhoto,
}) => {
  const { user } = useContext(authContext);
  // const v = selectedData?.requiredDoc.find(
  //   (doc) => doc === "Valid passport"
  // );
  // const a = selectedData?.requiredDoc.find(
  //   (doc) => doc === "Visa application form"
  // );
  // const r = selectedData?.requiredDoc.find(
  //   (doc) => doc === "Recent passport-sized photograph"
  // );

  console.log(validPassport, applicationForm, recentPhoto);

  const handleModaleUpdate = (event) => {
    event.preventDefault();

    document.getElementById("my_modal_1").close();
    const form = event.target;
    const countryImage = form.countryImage.value;
    const countryName = form.countryName.value;
    const visaType = form.visaType.value;
    const processingTime = form.processingTime.value;

    let requiredDoc = [];
    // document.querySelectorAll('[id="checkbox"]').forEach((box) => {
    //   if (box) {
    //     requiredDoc.push(box.value);
    //   }
    // });

    const validPassport = form.validPassport.value;
    const visaApplication = form.applicationForm.value;
    const recentPhoto = form.recentPhoto.value;

    requiredDoc.push(validPassport);
    requiredDoc.push(visaApplication);
    requiredDoc.push(recentPhoto);

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
    fetch(`https://visa-server-five.vercel.app/myAddedVisas/${id}`, {
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
          fetch(
            `https://visa-server-five.vercel.app/myAddedVisas?email=${user.email}`
          )
            .then((res) => res.json())
            .then((data) => setVisas(data));
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box w-full">
          <form
            className="w-full mx-auto bg-[#F4F3F0] rounded-lg py-10"
            onSubmit={handleModaleUpdate}
          >
            {/* Field 1 */}
            <div className="px-10 py-2">
              <div className="w-full">
                <p>Country Image</p>
                <input
                  defaultValue={selectedData?.countryImage}
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
                  defaultValue={selectedData?.countryName}
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
                  defaultValue={selectedData?.visaType}
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
                  defaultValue={selectedData?.processingTime}
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
                <p className="py-2">Required Documents</p>
                <div className="flex flex-col justify-between">
                  <div className="">
                    <p>Valid Passport</p>
                    <input
                      defaultValue={selectedData?.requiredDoc[0]}
                      name="validPassport"
                      type="text"
                      placeholder="Valid Passport"
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="">
                    <p>Applicaion Form</p>
                    <input
                      defaultValue={selectedData?.requiredDoc[1]}
                      name="applicationForm"
                      type="text"
                      placeholder="Applicaion Form"
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="">
                    <p>Recent Passport Photo</p>
                    <input
                      defaultValue={selectedData?.requiredDoc[2]}
                      name="recentPhoto"
                      type="text"
                      placeholder="Recent Passport Photo"
                      className="input input-bordered w-full"
                    />
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
                  defaultValue={selectedData?.description}
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
                  defaultValue={selectedData?.age}
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
                  defaultValue={selectedData?.fee}
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
                  defaultValue={selectedData?.validity}
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
                  defaultValue={selectedData?.applicationMethod}
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
                className="btn w-full bg-success"
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

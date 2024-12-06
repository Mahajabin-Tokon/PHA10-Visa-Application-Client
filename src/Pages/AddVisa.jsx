import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { authContext } from "../AuthProvider/AuthProvider";

const AddVisa = () => {
  const { user } = useContext(authContext);
  const navigate = useNavigate();
  const handleAddVisa = (event) => {
    event.preventDefault();
    const form = event.target;
    const userEmail = user?.email;
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
    const applied = [];

    const visa = {
      userEmail,
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

    // console.log(visa);

    // Send data to server
    fetch("https://visa-server-tau.vercel.app/visas", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(visa),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "New Visa Added Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          //   navigate("/");
        }
      });
  };

  //   https://i.ibb.co/wKhp82Z/1.png

  return (
    <div className="py-10">
      <div className="text-center font-rancho text-4xl my-10">Add New Visa</div>
      <form
        className="w-2/3 mx-auto bg-[#F4F3F0] py-10 rounded-3xl"
        onSubmit={handleAddVisa}
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
            <select className="select select-bordered w-full" name="visaType">
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
            <div className="flex flex-col md:flex-row justify-between md:items-center">
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
            value="Add Visa"
            className="btn w-full btn-success"
          />
        </div>
      </form>
    </div>
  );
};

export default AddVisa;

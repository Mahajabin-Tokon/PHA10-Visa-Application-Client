import React from "react";

const Success = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      <div className="flex flex-col justify-center items-center border-2 py-4 rounded-3xl">
        <p className="font-bold">User Count</p>
        <p>200</p>
      </div>
      <div className="flex flex-col justify-center items-center border-2 py-4 rounded-3xl">
        <p className="font-bold">Application Count</p>
        <p>200</p>
      </div>
      <div className="flex flex-col justify-center items-center border-2 py-4 rounded-3xl">
        <p className="font-bold">Approved Count</p>
        <p>200</p>
      </div>
    </div>
  );
};

export default Success;

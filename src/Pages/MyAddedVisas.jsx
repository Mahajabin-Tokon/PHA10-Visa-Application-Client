import React, { useContext, useEffect } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const MyAddedVisas = () => {
  const { user } = useContext(authContext);
  useEffect(() => {
    fetch(`http://localhost:5001/myAddedVisas?email=${user.email}`,)
    .then((res) => res.json())
    .then((data) => console.log(data));
  }, []);
  return <div>MyAddedVisas</div>;
};

export default MyAddedVisas;

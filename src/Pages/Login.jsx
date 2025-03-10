import React, { useContext, useRef, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { handleLogin, handleGoogleLogin, setEmailReference, loading } =
    useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const emailRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    // console.log(location.state);
    handleLogin(email, password)
      .then((result) => {
        if (!location.state) {
          navigate("/");
        } else {
          navigate(location.state.from);
        }
      })
      .catch((error) => {
        setError("Invalid credentials");
        // if (loading) {
        //   return (
        //     <div className="text-center mt-32">
        //       <span className="loading loading-spinner loading-lg"></span>
        //     </div>
        //   );
        // } else {
        //   setError("Invalid credentials");
        // }
      });
  };

  const googleLogin = () => {
    handleGoogleLogin()
      .then((result) => {
        if (!location.state) {
          navigate("/");
        } else {
          navigate(location.state.from);
        }
      })
      .catch((error) => {
        setError("Invalid credentials");
      });
  };

//   const handleForgetPassword = () => {
//     setError("Password reset feature not requested");
//   };
  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-6xl mx-auto my-2 px-2">
        <div className="flex flex-col justify-center items-center gap-4 p-5 m-5">
          <div className="text-center text-4xl">Login</div>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              name="email"
              ref={emailRef}
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label">
              <span className="label-text-alt">
                Forgot Password? Click{" "}
                <span className="text-red-600">
                  Here
                </span>
              </span>
            </div>
          </label>

          <div className="">
            Do not have an account?{" "}
            <Link to="/register" className="text-red-800">
              Register
            </Link>
          </div>
          <div>{error && <p className="text-xs text-red-600">{error}</p>}</div>
        </div>

        <div className="text-center my-5">
          <button type="submit" className="btn font-bold w-1/4">
            Login
          </button>
        </div>
      </form>
      <div className="text-center my-5 max-w-6xl mx-auto px-2">
        <button onClick={googleLogin} className="btn font-bold w-1/4">
          Login via Google
        </button>
      </div>
    </>
  );
};

export default Login;

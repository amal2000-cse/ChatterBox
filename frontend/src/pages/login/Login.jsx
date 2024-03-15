import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg bg-gray-500 ">
        <h1 className="text-gray-300 text-3xl font-semibold text-center">
          Login
          <span className="text-blue-600"> ChatApp</span>
        </h1>

        <form action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="Enter Username"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              className="w-full input input-bordered h-10"
              placeholder="Enter Password"
            />
          </div>

          <a href="#" className="text-sm hover:underline hover:text-blue-400 mt-3 inline-block">
            {"Don't"} have a account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2 hover:bg-blue-600">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

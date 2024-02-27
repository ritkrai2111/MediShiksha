import React from "react";
import Divider from "../sharedcomps/Divider";

const Signuptemplate = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="card mt-4 mb-4 w-auto lg:card-side bg-base-100 shadow-xl">
        <form className="card-body">
          <div className="flex justify-center items-center text-center">
            <h1 className="text-2xl">Sign Up Today!</h1>
          </div>
          <Divider />
          <div className="form-control">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Enter Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Re-enter Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="/auth/signin" className="label-text-alt link link-hover">
                Have an account? Sign in instead!
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-yellow-500">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signuptemplate;

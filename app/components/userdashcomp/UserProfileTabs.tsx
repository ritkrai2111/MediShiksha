"use client";
import React from "react";
import Divider from "../sharedcomps/Divider";

const UserProfileTabs = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="card mt-4 mb-4 w-auto lg:card-side bg-base-100 shadow-xl">
        <form className="card-body">
          <div className="flex justify-center items-center text-center">
            <h1 className="text-2xl">Edit your profile settings</h1>
          </div>
          <Divider />
          <div className="flex justify-center items-center">
            <div className="avatar placeholder">
              <div className="bg-red-700 text-neutral-content rounded-full w-24">
                <span className="text-3xl">AK</span>
              </div>
            </div>
            <div>
              <button
                className="btn bg-yellow-500 ml-4"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Change Profile Picture
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <h3 className="font-bold text-lg">Upload an Image</h3>
                  <input
                    type="file"
                    className="file-input file-input-bordered w-full max-w-xs mt-4"
                  />
                </div>
              </dialog>
            </div>
          </div>
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
              <span className="label-text">Re-enter Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-yellow-500">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfileTabs;

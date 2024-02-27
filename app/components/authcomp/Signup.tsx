import React from "react";
import Signuptemplate from "./Signuptemplate";

const Signup = () => {
  return (
    <div>
      <div className="drawer bg-gray-200">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-white">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <a>
                <img
                  src="../../images/Medishikshalogo.png"
                  alt="Logo"
                  className="w-28 h-16 mr-6"
                />
              </a>
            </div>
            <div className="navbar-start hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About Medishiksha</a>
                </li>
                <li>
                  <a href="/courses">Browse Courses</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                <li>
                  <div className="form-control mr-2">
                    <input
                      type="text"
                      placeholder="Search"
                      className="input input-bordered w-28 md:w-auto"
                    />
                  </div>
                </li>
                <li className="mt-2">
                  <a className="btn bg-red-700 text-white mx-4">Sign In</a>
                </li>
                <li className="mt-2">
                  <a className="btn bg-red-700 text-white">
                    Sign Up- It&apos;s Free
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Signuptemplate />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-6 w-80 min-h-full bg-white">
            <li>
              <div className="avatar placeholder">
                <div className="bg-red-700 text-neutral-content rounded-full w-12">
                  <span className="text-3xl">AK</span>
                </div>
                <h2 className="text-xl">Ansh Karwal</h2>
              </div>
            </li>
            <li>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-50 md:w-auto"
                />
              </div>
            </li>
            <li className="mt-2">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Medishiksha</a>
            </li>
            <li>
              <a href="/courses">Browse Courses</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li className="mt-2">
              <a className="btn bg-red-700 text-white mx-4">Sign In</a>
            </li>
            <li className="mt-2">
              <a className="btn bg-red-700 text-white">
                Sign Up- It&apos;s Free
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Signup;

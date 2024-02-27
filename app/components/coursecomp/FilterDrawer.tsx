import React from "react";
import Divider from "../sharedcomps/Divider";

const FilterDrawer = () => {
  return (
    <div>
      <div className="drawer" style={{ zIndex: 1000 }}>
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex justify-end mr-4">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="btn bg-red-700 text-white drawer-button"
          >
            Apply Filters
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-red-700 text-white">
            <h1 className="text-center text-white text-2xl">Apply Filters</h1>
            <Divider />
            <li>
              <div className="collapse collapse-plus bg-red-700">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl text-white font-medium">
                  Sort by: Category
                </div>
                <div className="collapse-content">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text text-white">AYUSH</span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        style={{ border: "2px solid white" }}
                      />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text text-white">MBBS / MD</span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        style={{ border: "2px solid white" }}
                      />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text text-white">PARAMEDICS</span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        style={{ border: "2px solid white" }}
                      />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text text-white">NON MEDICO</span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        style={{ border: "2px solid white" }}
                      />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text text-white">
                        Integrative medicine
                      </span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        style={{ border: "2px solid white" }}
                      />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text text-white">Emergency</span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        style={{ border: "2px solid white" }}
                      />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text text-white">
                        Palliative care
                      </span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        style={{ border: "2px solid white" }}
                      />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text text-white">Level 1</span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        style={{ border: "2px solid white" }}
                      />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text text-white">Level 2 </span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        style={{ border: "2px solid white" }}
                      />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text text-white">Level 3</span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        style={{ border: "2px solid white" }}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="collapse collapse-plus bg-red-700">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl text-white font-medium">
                  Sort by: Date
                </div>
                <div className="collapse-content">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text text-white">
                        Oldest to Latest
                      </span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        style={{ border: "2px solid white" }}
                      />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text text-white">
                        Latest to Oldest
                      </span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        style={{ border: "2px solid white" }}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="collapse collapse-plus bg-red-700">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl text-white font-medium">
                  Sort by: Price
                </div>
                <div className="collapse-content">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text text-white">Ascending</span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        style={{ border: "2px solid white" }}
                      />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text text-white">Descending</span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        style={{ border: "2px solid white" }}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="collapse collapse-plus bg-red-700">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl text-white font-medium">
                  Sort by: Rating
                </div>
                <div className="collapse-content">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask bg-white mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask bg-white mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask bg-white mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask bg-white mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask bg-white mask-star"
                        />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="collapse collapse-plus bg-red-700">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl text-white font-medium">
                  Sort by: Difficulty
                </div>
                <div className="collapse-content">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text text-white">Beginner</span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        style={{ border: "2px solid white" }}
                      />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text text-white">
                        Intermediate
                      </span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        style={{ border: "2px solid white" }}
                      />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text text-white">Advanced</span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        style={{ border: "2px solid white" }}
                      />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text text-white">Master</span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        style={{ border: "2px solid white" }}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterDrawer;

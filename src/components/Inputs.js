import React from "react";

import { HOST_OPTIONS, YEAR_OPTIONS } from "../util";

export const Inputs = ({
  onSubmit,
  onQueryChange,
  onSelectChange,
  isLoading,
  query,
  host,
  year
}) => (
  <form className="mb2 p2 sm-p3 bg-light rounded sm-flex justify-between" onSubmit={onSubmit}>
    <div className="flex sm-col-6 mb2 sm-m0">
      <input
        className="input m0 rounded-left"
        type="search"
        name="query"
        placeholder="Search..."
        value={query}
        onChange={onQueryChange}
        required={true}
      />
      <button className="btn btn-primary rounded-right" type="submit" disabled={isLoading}>
        Go
      </button>
    </div>
    <div className="flex sm-col-5 mxn1 h5">
      <select className="select mx1 my0 col-7" name="host" value={host} onChange={onSelectChange}>
        {HOST_OPTIONS.map(option => (
          <option key={option.id} value={option.id}>
            {option.display}
          </option>
        ))}
      </select>
      <select className="select mx1 my0 col-5" name="year" value={year} onChange={onSelectChange}>
        {YEAR_OPTIONS.map(option => (
          <option key={option.id} value={option.id}>
            {option.display}
          </option>
        ))}
      </select>
    </div>
  </form>
);

import React from "react";

import { API_RESULTS_LIMIT, ORDER_OPTIONS } from "../util";

const resultSentence = n => `${n}${n === API_RESULTS_LIMIT ? "+" : ""} result${n !== 1 ? "s" : ""}`;

export const Results = ({ jokes, order, onSelectChange }) => (
  <div>
    <div className="mb2 flex items-center justify-between">
      <h5 className="m0">{resultSentence(jokes.length)}</h5>
      <div className="flex items-center justify-center">
        <h5 className="m0 pr1 flex-none">Sort by:</h5>
        <select
          className="m0 select select-skinny h5"
          name="order"
          value={order}
          onChange={onSelectChange}
        >
          {ORDER_OPTIONS.map(option => (
            <option key={option.id} value={option.id}>
              {option.display}
            </option>
          ))}
        </select>
      </div>
    </div>
    {jokes.map(joke => (
      <div key={joke.id} className="mb3 pl2 py2 result">
        <div className="mb2">{joke.text}</div>
        <div className="h5">
          {joke.host}
          <span className="px1">/</span>
          {joke.date}
        </div>
      </div>
    ))}
  </div>
);

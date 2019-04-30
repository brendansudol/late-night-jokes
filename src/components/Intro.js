import React from "react";

import { SUGGESTED_QUERIES } from "../util";

export const Intro = ({ onSuggestionClick }) => (
  <div className="py1">
    <span className="mr1">A few suggestions to get you started:</span>
    {SUGGESTED_QUERIES.map(suggestion => (
      <a key={suggestion} className="mr1 bold" href="#!" onClick={onSuggestionClick(suggestion)}>
        {suggestion}
      </a>
    ))}
  </div>
);

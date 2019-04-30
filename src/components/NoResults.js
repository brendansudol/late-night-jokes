import React from "react";

export const NoResults = ({ query }) => (
  <p className="my3 p2 h3 center rounded no-results">
    <strong>Sorry!</strong> We couldn't find any results for <em>{query}</em>.
  </p>
);

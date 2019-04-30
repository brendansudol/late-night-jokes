import React from "react";

export const SkeletonLine = ({ className = "", width }) => (
  <div className={`skeleton-line ${className}`} style={{ width }} />
);

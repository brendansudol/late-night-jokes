import React from "react";

export const Skeleton = ({ className = "", width }) => (
  <div className={`skeleton-line ${className}`} style={{ width }} />
);

export const Loading = ({ entries = 25 }) => (
  <div>
    <Skeleton className="mb2" width={70} />
    {[...Array(entries)].map((_, i) => (
      <div key={i} className="mb3 pl2 py2 result">
        <div className="mb2">
          <Skeleton className="mb1 h3" width="60%" />
          <Skeleton className="mb1 h3" width="80%" />
        </div>
        <Skeleton className="h5" width="30%" />
      </div>
    ))}
  </div>
);

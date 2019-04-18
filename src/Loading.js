import React from "react";

export const Skeleton = ({ className = "", width }) => (
  <div className={`skeleton-line ${className}`} style={{ width }} />
);

export const Loading = ({ entries = 25 }) => (
  <div>
    <div className="mb2 flex items-center justify-between">
      <Skeleton width={70} />
      <Skeleton className="h2" width={100} />
    </div>
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

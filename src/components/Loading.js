import React from "react";

import { SkeletonLine } from "./SkeletonLine";

export const Loading = ({ entries = 50 }) => (
  <div>
    <div className="mb2 flex items-center justify-between">
      <SkeletonLine width={70} />
      <SkeletonLine className="h2" width={100} />
    </div>
    {[...Array(entries)].map((_, i) => (
      <div key={i} className="mb3 pl2 py2 result result-loading">
        <div className="mb2">
          <SkeletonLine className="mb1 h3" width="60%" />
          <SkeletonLine className="mb1 h3" width="80%" />
        </div>
        <SkeletonLine className="h5" width="30%" />
      </div>
    ))}
  </div>
);

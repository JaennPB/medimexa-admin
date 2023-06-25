import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function DashboardCard({ children }: Props) {
  return (
    <div className="p-4">
      <div style={{minHeight:'100v'}}  className="card bg-base-100 shadow-xl h-full ">
        <div className="card-body p-4">{children}</div>
      </div>
    </div>
  );
}

export default DashboardCard;

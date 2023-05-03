import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function DashboardCard({ children }: Props) {
  return (
    <div className="p-6 h-[93vh]">
      <div className="card bg-base-100 shadow-xl h-full ">
        <div className="card-body justify-around">{children}</div>
      </div>
    </div>
  );
}

export default DashboardCard;

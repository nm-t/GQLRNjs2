import * as React from "react";

const getRevenue = (rawRevenue: number) =>
  rawRevenue / 1000000000 > 1
    ? `$ ${(rawRevenue / 1000000000).toFixed(2)} Billion`
    : `$ ${(rawRevenue / 1000000).toFixed(2)} Million`;

interface RevenueProps {
  revenue: number;
}

const Revenue: React.FC<RevenueProps> = ({ revenue }) => {
  return (
    <>
      <div className="heading">Revenue</div>
      <div className="detail">{getRevenue(revenue)}</div>
    </>
  );
};

export default Revenue;

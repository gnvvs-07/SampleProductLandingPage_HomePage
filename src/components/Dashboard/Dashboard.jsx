import React, { useState, useEffect } from "react";
import "./Dashboard.css";

export default function DashBoard() {
  const [values, setValues] = useState([0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setValues((prevValues) => {
        const updatedValues = prevValues.map((value, index) =>
          value < getLimit(index) ? value + 1 : value
        );
        return updatedValues;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const getLimit = (index) => {
    switch (index) {
      case 0:
        return 85;
      case 1:
      case 2:
        return 25;
      default:
        return 0;
    }
  };

  return (
    <div className="border rounded-md bg-gradient-to-r from-pink-500 to-orange-500 flex justify-between p-16 m-4 items-center">
      <div className="dashboard-item">
        <h1 className="font-semibold text-3xl">{values[0]}%</h1>
        <p className="text-gray-200">Reduction in out-of-stock</p>
      </div>
      <div className="dashboard-item">
        <div className="flex items-baseline gap-1">
          <h1 className="font-semibold text-3xl">{values[1]} </h1>
          <span>Days</span>
        </div>
        <p className="text-gray-200">Reduction in cash recovery time</p>
      </div>
      <div className="dashboard-item">
        <h1 className="font-semibold text-3xl">{values[2]}%</h1>
        <p className="text-gray-200">Growth in revenue</p>
      </div>
    </div>
  );
}

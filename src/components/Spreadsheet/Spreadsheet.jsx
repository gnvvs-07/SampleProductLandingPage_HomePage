import React from "react";

const Spreadsheet = () => {
  return (
    <div className="flex flex-col items-center p-6 shadow-xl rounded-2xl mb-8">
      <img
        className="rounded-2xl w-full mb-4"
        src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting.webp"
        alt="Demand forecasting image"
      />
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">
          Things your spreadsheet wishes it could do
        </h2>
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-lg font-semibold">
              Accurate Demand Forecasting
            </h3>
            <p className="text-sm">
              Dynamically predict future demand across all channels, with high
              accuracy and lowest granularity. Crest takes into account what
              traditional forecasts do not: trends, real-time market signals,
              promotional activities, and even logistics disruptions.
            </p>
            <a href="#" className="text-xs text-blue-500 hover:underline">
              Learn more
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <p className="border-t text-left border-gray-300 p-4 font-semibold text-sm">
              HELIX: Workflow Automation
            </p>
            <p className="border-t text-left border-gray-300 p-4 font-semibold text-sm">
              Automated Purchase Planning
            </p>
            <p className="border-t text-left border-gray-300 p-4 font-semibold text-sm">
              Automated Distribution Planning
            </p>
            <p className="border-t text-left border-gray-300 p-4 font-semibold text-sm">
              Easy Integration
            </p>
            <p className="border-t text-left border-gray-300 p-4 font-semibold text-sm">
              Custom Dashboards
            </p>
            <p className="border-t text-left border-gray-300 p-4 font-semibold text-sm">
              Consensus Planning
            </p>
          </div>
        </div>
        <button className="bg-black text-white rounded-3xl py-2 px-4 mt-8 text-xs">
          View all features
        </button>
      </div>
    </div>
  );
};

export default Spreadsheet;

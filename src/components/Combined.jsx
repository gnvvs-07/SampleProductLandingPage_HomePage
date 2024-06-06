import React from "react";
import FounderComponent from "./Founder/FounderComponent";
import Spreadsheet from "./Spreadsheet/Spreadsheet";
import Sidebar from "./Sidebar";

export default function Combined() {
  return (
    <div className="flex md:flex-row flex-col gap-2">
      <div className="flex-1">
        <Sidebar/>
      </div>
      <div className="flex-1 flex flex-col">
        <FounderComponent />
        <Spreadsheet />
      </div>
    </div>
  );
}

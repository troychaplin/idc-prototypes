import React from "react";

export const Navigation = () => {
  return (
    <div className="flex items-center flex-none px-6 border border-solid rounded border-idc-blue-200">
      <ul className="flex gap-5 text-[15px] text-black">
        <li className="idc-navitem">
          <a href="#">Services</a>
        </li>
        <li className="idc-navitem">
          <a href="#">Process</a>
        </li>
        <li className="idc-navitem">
          <a href="#">Documents</a>
        </li>
        <li className="idc-navitem">
          <a href="#">Embassies</a>
        </li>
        <li className="idc-navitem">
          <a href="#">Resources</a>
        </li>
      </ul>
    </div>
  );
};

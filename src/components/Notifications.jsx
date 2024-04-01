import React from "react";

const Notifications = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-[#0f172a] text-3xl font-bold font-sans">Notifications</h1>
      <div>
        <p className="flex items-center bg-[#0b69ff] p-3 w-96 my-5">
          <img
            src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
            alt="information"
            className="h-4"
          />{" "}
          <span className="text-white px-3 text-sm">Information Message</span>
        </p>

        <p className="flex items-center bg-[#2dca73] p-3 w-96 my-5">
          <img
            src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            alt="information"
            className="h-4"
          />{" "}
          <span className="text-white px-3 text-sm">Success Message</span>
        </p>

        <p className="flex items-center bg-[#ffb800] p-3 w-96 my-5">
          <img
            src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
            alt="information"
            className="h-4"
          />{" "}
          <span className="text-white px-3 text-sm">Warning Message</span>
        </p>

        <p className="flex items-center bg-[#ff0b37] p-3 w-96 my-5">
          <img
            src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
            alt="information"
            className="h-4"
          />{" "}
          <span className="text-white px-3 text-sm">Error Message</span>
        </p>
      </div>
    </div>
  );
};

export default Notifications;

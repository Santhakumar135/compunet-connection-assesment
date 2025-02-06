import React from "react";

const Context = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      {children}
    </div>
  );
};

export default Context;
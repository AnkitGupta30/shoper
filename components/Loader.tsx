import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-28 w-28 border-b-2 border-blue-500" />
    </div>
  );
};

export default Loader;

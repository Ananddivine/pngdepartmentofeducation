// src/utils/LoadingOverlay.jsx
import React from "react";

const LoadingOverlay = ({ message = "Loading..." }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500" />
        <p className="text-lg font-semibold text-blue-700 animate-pulse">{message}</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;

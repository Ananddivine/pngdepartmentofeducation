import React, { useState } from "react";

const UploadTerminal = ({ uploading, uploadProgress, uploadLogs }) => {
  const [visible, setVisible] = useState(true);

  if (!uploading || !visible) return null;

  const handleCopyLogs = () => {
    const logText = uploadLogs.join("\n");
    navigator.clipboard.writeText(logText);
    alert("Logs copied to clipboard!");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="relative bg-black text-green-400 font-mono text-sm p-6 rounded-lg w-11/12 max-w-2xl h-[400px] overflow-y-auto border border-green-500 shadow-lg animate-fade">
        
        {/* Close button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-3 text-red-400 text-lg font-bold hover:text-red-500"
        >
          ×
        </button>

        {/* Title */}
        <div className="mb-2 text-center text-lime-300 font-bold">Uploading...</div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-800 rounded h-3 mb-1 overflow-hidden">
          <div
            className="h-full bg-green-500 rounded animate-upload"
            style={{ width: `${uploadProgress}%`, transition: "width 0.3s ease" }}
          />
        </div>
        <div className="text-right text-xs text-lime-400 mb-4">
          {uploadProgress}%
        </div>

        {/* Logs */}
        <div className="space-y-1 mb-4">
          {uploadLogs.map((log, index) => {
            let textColor = "text-green-400";
            if (log.includes("[ ERROR ]")) textColor = "text-red-400";
            else if (log.includes("[ WARN ]")) textColor = "text-yellow-400";
            else if (log.includes("[ INFO ]")) textColor = "text-blue-400";
            else if (log.includes("[ ✔ ]") || log.includes("[ OK ]")) textColor = "text-lime-400";

            return (
              <p key={index} className={`${textColor} break-words`}>
                {log}
              </p>
            );
          })}
        </div>

        {/* Copy button */}
        <div className="flex justify-end">
          <button
            onClick={handleCopyLogs}
            className="bg-blue-600 text-white px-3 py-1 text-xs rounded hover:bg-blue-700"
          >
            Copy Logs
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadTerminal;

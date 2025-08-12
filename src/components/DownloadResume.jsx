

import React from "react";

export default function DownloadResume() {
  return (
    <div className="flex justify-center my-8">
      <a
        href="/resume.pdf"
        download="Tasin-Resume.pdf" 
        className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md shadow-lg hover:bg-red-700 transition-colors duration-300"
      >
        Download Resume
      </a>
    </div>
  );
}
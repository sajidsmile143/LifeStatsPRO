import React from "react";

interface AdSpaceProps {
  label?: string;
}

export function AdSpace({ label }: AdSpaceProps) {
  return (
    <div className="my-6 p-4 bg-gray-100 dark:bg-gray-800 text-center text-xs text-gray-400 rounded-lg border border-dashed border-gray-300 dark:border-gray-700/60 shadow-sm transition-all hover:border-gray-400 dark:hover:border-gray-600">
      <span className="font-mono uppercase tracking-wider">
        Google AdSense Space {label ? `(${label})` : ""}
      </span>
    </div>
  );
}

import React from 'react';

/**
 * A pulsing loader animation using Tailwind CSS.
 */
const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full my-8">
      <div className="w-16 h-16 border-4 border-t-4 border-blue-600 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;

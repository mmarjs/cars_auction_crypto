import React from 'react';

interface ProgressBarProps {
  value: number;
  max: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, max }) => {
  const width = `${(value / max) * 100}%`;

  return (
    <div className="relative">
      <div className="w-full h-[3px] bg-white opacity-10 rounded-full"></div>
      <div
        className="absolute h-full top-0 left-0 rounded-full bg-warning"
        style={{ width }}
      />
    </div>
  );
};

export default ProgressBar;

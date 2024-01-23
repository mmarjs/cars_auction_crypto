import React from 'react';

interface PerformanceProps {
  range: number;
  mph: number;
  topSpeed: number;
  power: number;
}

const Performance: React.FC<PerformanceProps> = ({ range, mph, topSpeed, power }) => {
  return (
    <div>
      <div className="flex flex-col mb-10.5">
        <span className="font-semibold text- leading-10 text-[32px] text-secondary mb-2">
          {range} mi
        </span>
        <span className="font-semibold text-base leading-5 text-secondary opacity-50">
          Range (EPA est.)
        </span>
      </div>
      <div className="flex flex-col mb-10.5">
        <span className="font-semibold text- leading-10 text-[32px] text-secondary mb-2">
          {mph} s
        </span>
        <span className="font-semibold text-base leading-5 text-secondary opacity-50">
          0-60 mph
        </span>
      </div>
      <div className="flex flex-col mb-10.5">
        <span className="font-semibold text- leading-10 text-[32px] text-secondary mb-2">
          {topSpeed} mph
        </span>
        <span className="font-semibold text-base leading-5 text-secondary opacity-50">
          Top speed
        </span>
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text- leading-10 text-[32px] text-secondary mb-2">
          {power} hp
        </span>
        <span className="font-semibold text-base leading-5 text-secondary opacity-50">
          Peak Power
        </span>
      </div>
    </div>
  );
};

export default Performance;

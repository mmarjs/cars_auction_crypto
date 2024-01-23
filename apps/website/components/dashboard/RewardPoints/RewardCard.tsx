import React from 'react';
import { RewardPointType } from '@appWebsite/types';

const RewardCard: React.FC<RewardPointType> = ({ name, icon }) => {
  return (
    <div className="h-[166px] relative flex items-end bg-[#23262F] rounded-5 pb-8.5">
      <div className="flex justify-center absolute top-0 left-0 right-0 -translate-y-1/2">
        {icon}
      </div>
      <p className="w-full font-medium text-lg text-center text-secondary">
        {name}
      </p>
    </div>
  );
};

export default RewardCard;

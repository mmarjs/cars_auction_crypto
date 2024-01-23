import React from 'react';
import Image from '@appWebsite/components/common/Image';
import ProgressBar from '@appWebsite/components/common/ProgressBar';
import { GiveawayType } from '@appWebsite/types';
import { numberWithCommas } from '@appWebsite/utils';

const Giveaways: React.FC<GiveawayType> = ({ name, avatar, value, max }) => {
  return (
    <div className="bg-[#23262F] rounded-5 rounded-5 p-4">
      <div className="mb-3">{avatar}</div>
      <p className="font-medium text-base leading-5 text-secondary mb-2">
        {name}
      </p>
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center">
            <Image
              src="/images/icons/star.svg"
              width={13}
              height={13}
              className="mr-[5px]"
            />
            <span className="text-sm text-warning leading-[17px]">
              {numberWithCommas(value)}
            </span>
          </div>
          <div className="flex items-center">
            <Image
              src="/images/icons/star.svg"
              width={13}
              height={13}
              className="mr-[5px] filter brightness-0 invert opacity-40"
            />
            <span className="text-sm text-secondary leading-[17px]">
              {numberWithCommas(max)}
            </span>
          </div>
        </div>

        <ProgressBar value={value} max={max} />
      </div>
    </div>
  );
};

export default Giveaways;

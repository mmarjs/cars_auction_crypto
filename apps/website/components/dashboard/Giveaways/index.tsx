import React from 'react';
import IconButton from '@appWebsite/components/common/IconButton';
import Image from '@appWebsite/components/common/Image';
import GiveawayCard from './GiveawayCard';
import { GiveawayType } from '@appWebsite/types';

const Giveaways: React.FC = () => {
  const items: GiveawayType[] = [
    {
      name: 'Tesla Model S Plaid',
      avatar: (
        <Image
          src="/images/dashboard/giveaways/1.png"
          width={164}
          height={68}
        />
      ),
      value: 55250,
      max: 100000,
    },
    {
      name: 'T-shirt Cars & Crypto',
      avatar: (
        <Image src="/images/dashboard/giveaways/2.png" width={79} height={79} />
      ),
      value: 5433,
      max: 7500,
    },
    {
      name: 'CLONEX NFT',
      avatar: (
        <Image src="/images/dashboard/giveaways/3.png" width={70} height={70} />
      ),
      value: 35422,
      max: 70000,
    },
  ];

  return (
    <div className="w-[320px] flex-shrink-0 bg-black rounded-5">
      <div className="px-5 py-6.5 border-b border-dark">
        <span className="font-medium text-lg text-white leading-5.5">
          Giveaways
        </span>
      </div>
      <div className="px-5 pt-6.5 pb-4">
        {items.map((item: GiveawayType, index: React.Key) => (
          <div key={index} className="mb-5">
            <GiveawayCard {...item} />
          </div>
        ))}
        <div className="flex justify-between items-center">
          <span className="font-medium text-sm text-warning leading-4">
            Enter giveaways
          </span>
          <IconButton>
            <Image
              src="/images/icons/chevron_right.svg"
              width={24}
              height={24}
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Giveaways;

import React from 'react';
import { useRouter } from 'next/router';
import Image from '@appWebsite/components/common/Image';
import { LuxuryType } from '@appWebsite/types';
import Tag from '@appWebsite/components/luxury/Tag';

const Luxury: React.FC<LuxuryType> = ({ name, avatar }) => {
  const router = useRouter();

  interface TagType {
    name: string;
    avatar: React.ReactNode;
  }

  const tags: TagType[] = [
    {
      name: '5 seats',
      avatar: <Image src="/images/icons/5seats.svg" width={13} height={15} />,
    },
    {
      name: 'AC',
      avatar: <Image src="/images/icons/ac.svg" width={15} height={15} />,
    },
    {
      name: 'Auto',
      avatar: <Image src="/images/icons/auto.svg" width={11} height={15} />,
    },
    {
      name: 'Electro',
      avatar: <Image src="/images/icons/electron.svg" width={15} height={14} />,
    },
  ];

  return (
    <div
      className="bg-[#23262F] rounded-5"
      onClick={() => router.push('/luxury/rent')}
    >
      <div className="w-full h-[110px] flex items-center justify-center">
        {avatar}
      </div>
      <div className="px-4 pb-5">
        <p className="font-medium text-base text-white leading-5 mb-4">
          {name}
        </p>
        <div className="flex justify-between">
          {tags.map((tag: TagType, index: React.Key) => (
            <Tag key={index} {...tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Luxury;

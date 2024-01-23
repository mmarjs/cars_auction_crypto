import React, { useState } from 'react';
import Image from '@appWebsite/components/common/Image';
import LocationInput from '@appWebsite/components/common/LocationInput';
import DatePicker from '@appWebsite/components/common/DatePicker';
import Tag from './Tag';
import { numberWithCommas } from '@appWebsite/utils';

interface LargeLuxuryProps {
  logo: React.ReactNode;
  avatar: React.ReactNode;
  point: number;
  location: string;
  date: string;
}

const LargeLuxury: React.FC<LargeLuxuryProps> = ({
  logo,
  avatar,
  point,
  location,
  date,
}) => {
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

  const [filter, setFilter] = useState({
    date: null,
  });

  const handleChangeDate = (date: Date, e: React.SyntheticEvent<any>) => {
    setFilter({ ...filter, date });
  };

  return (
    <div className="w-full max-w-[455px] rounded-5 bg-dark px-5 py-7.5 flex flex-col items-center">
      <div>{logo}</div>
      <div className="w-full h-40 relative pt-7">
        <div className="absolute w-full flex justify-center">{avatar}</div>
      </div>
      <div className="relative mb-6.5">
        <img
          src="/images/luxury/rent/symbol.png"
          className="w-full h-[184px]"
        />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
          <div className="flex justify-center items-end w-full mb-[25px]">
            <div className="flex items-center">
              <Image src="/images/icons/star.svg" width={26} height={24} />
              <span className="font-semibold text-[26px] text-warning leading-8 ml-2.5 mr-0.5">
                {numberWithCommas(point)}
              </span>
            </div>
            <span className="font-semibold text-xs leading-4 text-secondary mb-1">
              / Day
            </span>
          </div>
          <div className="flex w-full max-w-[206px] justify-between">
            {tags.map((tag: TagType, index: React.Key) => (
              <Tag key={index} {...tag} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex">
        <div className="w-1/2 flex justify-center">
          <LocationInput readonly={true} />
        </div>
        <div className="w-1/2 flex justify-center">
          <DatePicker
            variant="picker"
            value={filter.date}
            onChange={(date, e) => handleChangeDate(date, e)}
            label="Pick Up Date"
            icon={
              <Image src="/images/icons/calendar.svg" width={18} height={18} />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default LargeLuxury;

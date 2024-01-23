import React from 'react';
import { useRouter } from 'next/router';
import Button from '@appWebsite/components/common/Button';
import Image from '@appWebsite/components/common/Image';
import { numberWithCommas } from '@appWebsite/utils';
import { LuxuryCategoryType } from '@appWebsite/types';

const Category: React.FC<LuxuryCategoryType> = ({ point, avatar }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center relative bg-[#23262F] rounded-5 px-5 pt-[77px] pb-[46px]">
      <div className="flex justify-center absolute top-0 left-0 right-0 -translate-y-1/2">
        {avatar}
      </div>
      <div className="mb-[46px] relative">
        <img
          src="/images/luxury/category/symbol.png"
          className="w-full h-[153px]"
        />
        <div className="flex justify-center items-end w-full absolute bottom-9 left-1/2 -translate-x-1/2">
          <div className="flex items-center">
            <Image src="/images/icons/star.svg" width={36} height={34} />
            <span className="font-semibold text-4xl text-warning leading-[44px] mx-2.5">
              {numberWithCommas(point)}
            </span>
          </div>
          <span className="font-semibold text-lg leading-5.5 text-secondary mb-1">
            / Day
          </span>
        </div>
      </div>
      <Button onClick={() => router.push('/luxury/cars')}>Continue</Button>
    </div>
  );
};

export default Category;

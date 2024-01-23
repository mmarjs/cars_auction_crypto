import { FC } from 'react';
import Image from '@appWebsite/components/common/Image';
import { numberWithCommas } from '@appWebsite/utils';

interface SummaryTagProps {
  name: string;
  value: number;
  icon: string;
  className?: string;
}

const SummaryTag: FC<SummaryTagProps> = ({ name, value, icon, className }) => {
  return (
    <div className={`${className} flex items-center bg-[#1B1C1F] rounded-5 px-5 py-2`}>
      <div className="flex items-center justify-center w-11 h-11 rounded-full bg-black mr-5">
        <Image src={icon} width={24} height={21} />
      </div>
      <div className="flex flex-col">
        <span className="font-medium text-[13px] text-secondary leading-4 mb-1.5">
          {name}
        </span>
        <span className="font-medium text-sm text-warning leading-4">
          {numberWithCommas(value)}
        </span>
      </div>
    </div>
  );
};

export default SummaryTag;

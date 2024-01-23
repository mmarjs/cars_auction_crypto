import { FC } from 'react';
import Image from '@appWebsite/components/common/Image';
import { numberWithCommas } from '@appWebsite/utils';

interface PointBadgeProps {
  point: number;
  className?: string;
}

const PointBadge: FC<PointBadgeProps> = ({ point, className = '' }) => {
  return (
    <div
      className={`${className} h-8 rounded-[5px] bg-light-warning inline-flex items-center px-2`}
    >
      <Image
        src="/images/icons/star.svg"
        width={13}
        height={13}
        className="mr-1.5"
      />
      <span className="font-semibold text-xs text-warning leading-[15px]">
        {numberWithCommas(point)}
      </span>
    </div>
  );
};

export default PointBadge;

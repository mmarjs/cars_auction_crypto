import React from 'react';
import Image from '@appWebsite/components/common/Image';

interface BackProps {
  onClick: () => void;
}

const Back: React.FC<BackProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="flex items-center">
      <Image src="/images/icons/back.svg" width={24} height={24} />
      <span className="font-light text-sm leading-[17px] text-white ml-1.5">
        back
      </span>
    </button>
  );
};

export default Back;

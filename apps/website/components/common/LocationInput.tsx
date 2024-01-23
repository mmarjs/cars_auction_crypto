import React from 'react';
import Image from '@appWebsite/components/common/Image';

interface LocationInputProps {
  label?: string;
  value?: string;
  onChange?: () => void;
  readonly?: boolean;
}

const LocationInput: React.FC<LocationInputProps> = ({
  label = 'Pick Up Location',
  value = 'Kingston upon Hull',
  onChange,
  readonly = false,
}) => {
  return (
    <div>
      <div className="flex items-center mb-1.5 cursor-pointer">
        <Image src="/images/icons/marker.svg" width={18} height={18} />
        <span className="w-[112px] text-sm leading-4 text-white mx-2">
          {label}
        </span>
        {!readonly && (
          <Image src="/images/icons/chevron_down.svg" width={18} height={18} />
        )}
      </div>
      <div className="w-[112px] text-xs leading-4 text-secondary ml-6.5">
        {value}
      </div>
    </div>
  );
};

export default LocationInput;

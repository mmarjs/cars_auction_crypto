import React from 'react';
import Image from '@appWebsite/components/common/Image';
import IconButton from '@appWebsite/components/common/IconButton';
import { FilterTagType } from '@appWebsite/types';

interface TagProps {
  data: FilterTagType;
  onRemove: (id: string) => void;
}

const Tag: React.FC<TagProps> = ({ data, onRemove }) => {
  return (
    <div className="h-10 rounded-2.5 border border-dark px-3.5 flex items-center mr-3">
      <span className="font-medium text-base text-secondary leading-5 mr-3">
        {data.name}
      </span>
      <IconButton onClick={() => onRemove(data.id)}>
        <Image src="/images/icons/close.svg" width={18} height={18} />
      </IconButton>
    </div>
  );
};

export default Tag;

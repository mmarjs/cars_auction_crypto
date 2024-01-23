import React, { useState } from 'react';
import Image from '@appWebsite/components/common/Image';
import { FilterTagType } from '@appWebsite/types';
import Tag from './Tag';

const Filter: React.FC = () => {
  const [filter, setFilter] = useState<FilterTagType[]>([
    { id: 'electro', name: 'Electro' },
    { id: 'ac', name: 'AC' },
    { id: '5seats', name: '5 seats' },
    { id: 'auto', name: 'Auto' },
  ]);

  const handleRemove = (id: string) => {
    console.log(id);
  };

  return (
    <div className="flex items-center">
      <button className="h-10 px-3.5 flex items-center rounded-2.5 bg-dark border border-[#3C4254] mr-4">
        <Image src="/images/icons/filter.svg" width={20} height={20} />
        <span className="font-medium text-base leading-5 text-white pl-2.5">
          Filter
        </span>
      </button>
      <div className="flex items-center">
        {filter.map((item: FilterTagType, index: React.Key) => (
          <div key={index}>
            <Tag onRemove={handleRemove} data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;

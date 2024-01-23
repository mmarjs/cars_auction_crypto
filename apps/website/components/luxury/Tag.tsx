import React from 'react';

interface TagProps {
  name: string;
  avatar: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ name, avatar }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center w-8 h-8 bg-black rounded mb-1">
        {avatar}
      </div>
      <span className="font-semibold text-[6px] text-secondary leading-[7px]">
        {name}
      </span>
    </div>
  );
};

export default Tag;

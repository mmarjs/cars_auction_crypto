import { FC } from 'react';
import Image from '@appWebsite/components/common/Image';

interface SearchProps {
  placeholder?: string;
}

const Search: FC<SearchProps> = ({ placeholder = 'Type to search...' }) => {
  return (
    <div className="w-[232px] h-10 relative rounded-2.5 border-[#3C4254] bg-dark">
      <Image
        src="/images/icons/search.svg"
        width={18}
        height={18}
        className="absolute top-1/2 left-3 -translate-y-1/2"
      />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-full outline-none bg-transparent pl-10 pr-3 text-sm text-secondary leading-4"
      />
    </div>
  );
};

export default Search;

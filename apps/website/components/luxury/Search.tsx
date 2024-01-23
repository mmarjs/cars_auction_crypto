import React, { useState } from 'react';
import Image from '@appWebsite/components/common/Image';
import Button from '@appWebsite/components/common/Button';
import LocationInput from '@appWebsite/components/common/LocationInput';
import DatePicker from '../common/DatePicker';

const Search: React.FC = () => {
  const [filter, setFilter] = useState({
    date: null,
    location: '',
  });

  const handleChangeDate = (date: Date, e: React.SyntheticEvent<any>) => {
    setFilter({ ...filter, date });
  };

  return (
    <div className="flex items-center justify-between bg-dark rounded-5 px-6.5 py-5">
      <div className="flex">
        <div className="flex-shrink-0 border-r border-[#1B1C1F] pr-9 mr-9">
          <LocationInput />
        </div>
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
      <Button>Search</Button>
    </div>
  );
};

export default Search;

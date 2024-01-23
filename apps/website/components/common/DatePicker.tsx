import React, { FC } from 'react';
import { default as ReactDatePicker } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Image from '@appWebsite/components/common/Image';

interface DatePickerProps {
  icon?: React.ReactNode;
  label?: string;
  placeholder?: string;
  value: Date;
  onChange: (date: Date, e: React.SyntheticEvent<any>) => void;
  className?: string;
  format?: string;
  variant: 'default' | 'picker';
}

const DatePicker: FC<DatePickerProps> = ({
  icon,
  label,
  placeholder = '',
  value,
  onChange,
  className = '',
  format = 'dd/MM/yyyy',
  variant = 'default',
}) => {
  return (
    <>
      {variant === 'default' ? (
        <div
          className={`w-full h-[42px] relative flex items-center relative mb-3.5 ${className}`}
        >
          {icon && (
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[26px] flex flex-shrink-0">
              {icon}
            </div>
          )}
          <ReactDatePicker
            dateFormat={format}
            placeholderText={placeholder}
            selected={value}
            onChange={(date: Date, e: React.SyntheticEvent<any>) => onChange(date, e)}
            className="w-full h-[42px] font-semibold text-xs leading-[15px] bg-transparent text-white placeholder:text-secondary pl-6.5 pr-2 outline-none tracking-theme border-b border-dark focus:border-warning"
          />
        </div>
      ):(
        <div>
          <label htmlFor="picker" className="flex items-center cursor-pointer">
            {icon && <div className="w-[26px] flex flex-shrink-0">{icon}</div>}
            {label && (
              <span className="text-sm leading-4 text-white mr-2">{label}</span>
            )}
            <Image
              src="/images/icons/chevron_down.svg"
              width={18}
              height={18}
            />
          </label>
          <ReactDatePicker
            id="picker"
            dateFormat={format}
            placeholderText={placeholder}
            selected={value}
            onChange={(date: Date, e: React.SyntheticEvent<any>) => onChange(date, e)}
            className="w-20 h-4 mt-1.5 outline-none ml-6.5 text-xs text-[#757B8C] bg-transparent"
          />
        </div>
      )}
    </>
  );
};

export default DatePicker;

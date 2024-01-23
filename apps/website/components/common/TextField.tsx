import React, { FC } from 'react';

interface TextFieldProps {
  type?: string;
  name?: string;
  icon?: React.ReactNode;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const TextField: FC<TextFieldProps> = ({
  type = 'text',
  name,
  icon,
  placeholder = '',
  value,
  onChange,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`w-full h-[42px] relative flex items-center relative mb-3.5 ${className}`}
    >
      {icon && (
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[26px] flex flex-shrink-0">
          {icon}
        </div>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        className="w-full h-full font-semibold text-xs leading-[15px] bg-transparent text-white placeholder:text-secondary pl-6.5 pr-2 outline-none tracking-theme border-b border-dark focus:border-warning"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default TextField;

import { FC } from 'react';
import Image from '@appWebsite/components/common/Image';

interface LogoProps {
  collapsed: boolean;
}

const Logo: FC<LogoProps> = ({ collapsed }) => {
  return (
    <div
      className={`h-[76px] flex flex-col justify-center border-b border-dark overflow-hidden ${
        collapsed ? `px-2` : `px-7.5`
      }`}
    >
      <Image
        src="/images/logo.png"
        width={collapsed ? 62 : 81}
        height={collapsed ? 23 : 30}
        className={`${!collapsed && `-ml-1 mb-[3px]`}`}
      />
      <Image
        src="/images/text_logo.png"
        width={173}
        height={14}
        className={`${collapsed ? `hidden` : `flex`}`}
      />
    </div>
  );
};

export default Logo;

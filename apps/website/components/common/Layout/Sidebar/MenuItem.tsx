import { FC } from 'react';
import { useRouter } from 'next/router';
import { RouteType } from '@appWebsite/types';

interface MenuItemProp {
  active: boolean;
  collapsed?: boolean;
  data: RouteType;
}

const MenuItem: FC<MenuItemProp> = ({ active, collapsed, data }) => {
  const { label, hint, url, icon } = data;
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(url)}
      className={`h-[44px] flex items-center cursor-pointer ${
        !collapsed ? `px-6.5` : `px-0 justify-center`
      } ${active && `bg-dark`}`}
    >
      <div
        className={`${!collapsed && `mr-[15px]`} ${
          !active && `filter brightness-0 invert opacity-70`
        }`}
      >
        {icon}
      </div>
      {!collapsed && (
        <div className={`text-sm ${active ? `text-white` : `text-secondary`}`}>
          <span>{label} </span>
          {hint && <span className="text-[#414552]">({hint})</span>}
        </div>
      )}
    </div>
  );
};

export default MenuItem;

import { FC } from 'react';
import { useRouter } from 'next/router';
import Image from '@appWebsite/components/common/Image';
import IconButton from '@appWebsite/components/common/IconButton';
import Logo from './Logo';
import MenuItem from './MenuItem';
import Profile from './Profile';
import { RouteType, UserType } from '@appWebsite/types';

interface SidebarProps {
  collapsed: boolean;
  onCollapse: () => void;
}

const Sidebar: FC<SidebarProps> = ({ collapsed, onCollapse }) => {
  const router = useRouter();
  const routes: RouteType[] = [
    {
      label: 'Dashboard',
      url: '/dashboard',
      icon: (
        <Image
          src="/images/icons/grid.svg"
          width={24}
          height={24}
        />
      ),
    },
    {
      label: 'Points',
      url: '/points',
      icon: (
        <Image
          src="/images/icons/star.svg"
          width={24}
          height={22}
        />
      ),
    },
    {
      label: 'Luxury Rental',
      url: '/luxury',
      icon: (
        <Image
          src="/images/icons/car.svg"
          width={24}
          height={16}
        />
      ),
    },
    {
      label: 'Garage',
      hint: 'staking',
      url: '/garage',
      icon: (
        <Image
          src="/images/icons/box.svg"
          width={20}
          height={18}
        />
      ),
    },
  ];
  const userInfo: UserType = {
    name: 'Dmytro Huz',
    email: 'huz.dima@gmail.com',
    avatar: '/images/users/1.png',
  };

  const isActive = (route) => {
    return router.pathname.indexOf(route) > -1;
  };

  return (
    <div
      className={`fixed top-[26px] left-[26px] bottom-[26px] transition-all ${
        collapsed ? `w-20` : `w-[250px]`
      }`}
    >
      <IconButton
        className="absolute right-0 top-14 translate-x-1/2 translate-y-1/2 w-5 h-5 bg-dark"
        onClick={onCollapse}
      >
        <Image
          src="/images/icons/chevron_left.svg"
          width={12}
          height={12}
          className={`${collapsed && `filter rotate-180`}`}
        />
      </IconButton>
      <div className="h-full flex flex-col justify-between bg-black rounded-5 overflow-hidden">
        <div>
          <Logo collapsed={collapsed} />
          <ul className="py-5">
            {routes.map((route: RouteType, index: React.Key) => (
              <li key={index} className="mb-2.5">
                <MenuItem
                  data={route}
                  collapsed={collapsed}
                  active={isActive(route.url)}
                />
              </li>
            ))}
          </ul>
        </div>

        <div>
          {!collapsed && (
            <div className="mb-15">
              <p className="font-semibold text-sm text-[#3C4254] uppercase px-6.5 mb-5">
                Account
              </p>
              <MenuItem
                active={isActive('/settings')}
                collapsed={collapsed}
                data={{
                  label: 'Settings',
                  url: '/settings',
                  icon: (
                    <Image
                      src="/images/icons/setting.svg"
                      width={24}
                      height={24}
                    />
                  ),
                }}
              />
            </div>
          )}

          <Profile collapsed={collapsed} data={userInfo} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

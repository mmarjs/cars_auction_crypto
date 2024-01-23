import { FC } from 'react';

interface DropdownProps {
  open: boolean;
  onClose: () => void;
}

const Dropdown: FC<DropdownProps> = ({ open = false, onClose }) => {
  const menus = [
    {
      id: 'profile',
      label: 'View profile',
      action: () => {},
    },
    {
      id: 'history',
      label: 'History',
      action: () => {},
    },
    {
      id: 'logout',
      label: 'Log out',
      action: () => {},
    },
  ];

  const handleClickMenuItem = (action) => {
    action();
    onClose();
  };

  return (
    <ul className="absolute top-2 -translate-y-full left-2 right-2 bg-dark rounded-5 shadow-dropdown px-3">
      {menus.map((menu) => (
        <li
          key={menu.id}
          onClick={() => handleClickMenuItem(menu.action)}
          className="h-12 flex items-center justify-center text-sm text-white cursor-pointer border-b border-[#1B1C1F] last:border-none hover:text-warning"
        >
          {menu.label}
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;

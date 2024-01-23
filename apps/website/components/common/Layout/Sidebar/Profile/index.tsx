import { FC, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import Dropdown from './Dropdown';
import Image from '@appWebsite/components/common/Image';
import IconButton from '@appWebsite/components/common/IconButton';
import { UserType } from '@appWebsite/types';

interface ProfileProps {
  collapsed: boolean;
  data: UserType;
}

const Profile: FC<ProfileProps> = ({ collapsed, data }) => {
  const { name, email, avatar } = data;
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="relative">
      <div
        className="flex justify-between items-center p-5 bg-dark cursor-pointer"
        onClick={handleToggle}
      >
        <div className="flex items-center">
          <div
            className={`flex border border-white rounded-full overflow-hidden ${
              !collapsed && `mr-2.5`
            }`}
          >
            <img
              src={avatar}
              className="flex-shrink-0 w-10 h-10 object-cover"
            />
          </div>
          {!collapsed && (
            <div>
              <p className="text-sm text-white mb-[5px] leading-4">{name}</p>
              <p className="text-xs text-secondary leading-4">{email}</p>
            </div>
          )}
        </div>

        {!collapsed && (
          <IconButton className="w-4 h-4">
            <Image
              src="/images/icons/ellipsis.svg"
              width={14.67}
              height={2.68}
            />
          </IconButton>
        )}
      </div>

      {isOpen && (
        <OutsideClickHandler onOutsideClick={handleClose}>
          <Dropdown open={isOpen} onClose={handleClose} />
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default Profile;

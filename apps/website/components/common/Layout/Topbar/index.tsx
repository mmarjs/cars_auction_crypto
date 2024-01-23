import { FC } from 'react';
import Button from '@appWebsite/components/common/Button';
import IconButton from '@appWebsite/components/common/IconButton';
import Image from '@appWebsite/components/common/Image';
import PointBadge from '@appWebsite/components/common/PointBadge';
import Search from './Search';

interface TopbarProps {
  title?: string;
}

const Divider: FC = () => {
  return <div className="w-0.5 rounded-full bg-dark"></div>;
};

const Topbar: FC<TopbarProps> = ({ title }) => {
  return (
    <div className="h-20 rounded-5 flex items-center justify-between bg-black px-5">
      <p className="font-medium text-2xl text-white">{title}</p>
      <div className="flex items-center">
        <Search />
        <PointBadge point={25000} className="ml-5" />
        <div className="flex items-stretch mx-5">
          <Divider />
          <IconButton className="w-6 h-6 mx-5">
            <Image src="/images/icons/bell.svg" width={24} height={24} />
          </IconButton>
          <Divider />
        </div>
        <Button className="w-[175px] shadow-none rounded-[5px]">
          <Image
            src="/images/icons/wallet.svg"
            width={16}
            height={13}
            className="mr-2"
          />
          <span className="leading-[15px]">CONNECT WALLET</span>
        </Button>
      </div>
    </div>
  );
};

export default Topbar;

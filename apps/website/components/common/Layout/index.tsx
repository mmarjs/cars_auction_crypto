import { FC, useState } from 'react';
import Back from './Back';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  onBack?: () => void;
}

const Layout: FC<LayoutProps> = ({ children, title, onBack }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const handleToggle = () => setIsCollapsed(!isCollapsed);

  return (
    <div
      className={`transition-all p-6.5 ${
        isCollapsed ? `pl-[125px]` : `pl-[295px]`
      }`}
    >
      <Sidebar collapsed={isCollapsed} onCollapse={handleToggle} />
      <div className={`${onBack ? `mb-4` : `mb-5`}`}>
        <Topbar title={title} />
      </div>
      {onBack && (
        <div className="mb-4">
          <Back onClick={onBack} />
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Layout;

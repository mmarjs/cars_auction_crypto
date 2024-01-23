import React from 'react';
import classnames from 'classnames';
import { Navbar } from '@appWebsite/components/navbar';
import { Footer } from '@appWebsite/components/footer';

interface PropTypes {
  className?: string;
  children?: React.ReactNode;
}

const Layout: React.FC<PropTypes> = ({
  className,
  children
}) => {
  return (
    <>
      <Navbar />
      <div 
        className={classnames(
          'min-h-[calc(100vh-(var(--navbar-height)+var(--footer-height)))] bg-black',
          className,
        )}
      >
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
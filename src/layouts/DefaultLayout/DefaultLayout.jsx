import React from 'react';

import Header from '~/layouts/components/Header';

function DefaultLayout({ children }) {
  return (
    <React.Fragment>
      <div className="h-screen flex flex-col font-sans ">
        <Header />
        <div className="flex flex-1 pt-[74px] justify-center bg-all-background">
          <div className="w-[640px] ">{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DefaultLayout;

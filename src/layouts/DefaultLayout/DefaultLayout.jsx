import React from 'react';

import Header from '~/layouts/components/Header';

function DefaultLayout({ children }) {
  return (
    <React.Fragment>
      <div className="h-screen flex flex-col font-sans">
        <Header />
        <div className="flex flex-1 pt-[74px] justify-center">
          <div className="w-[620px] px-6">{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DefaultLayout;

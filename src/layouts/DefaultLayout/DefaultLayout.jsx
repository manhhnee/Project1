import React from 'react';

import Header from '~/layouts/components/Header';

function DefaultLayout({ children }) {
  return (
    <React.Fragment>
      <div className="h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">{children}</div>
      </div>
    </React.Fragment>
  );
}

export default DefaultLayout;

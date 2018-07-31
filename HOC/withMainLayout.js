import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const withMainLayout = (LayoutContent, pageProps) => {
  const Layout = props => (
    <MainLayout {...props}>
      <LayoutContent {...props} {...pageProps} />
    </MainLayout>
  );

  return Layout;
};

export default withMainLayout;

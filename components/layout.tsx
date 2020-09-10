import React from 'react';

import { useServiceWorker } from '~/hooks/use-service-worker';

const Layout: React.FC = ({ children }) => {
  useServiceWorker();

  return <>{children}</>;
};

export { Layout };

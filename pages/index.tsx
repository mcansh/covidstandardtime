import React from 'react';
import { NextPage } from 'next';
import { differenceInDays, format } from 'date-fns';

import { addOrdinalSuffix } from '~/utils/add-ordinal-suffix';

const Index: NextPage = () => {
  const now = new Date();
  const march = new Date(2020, 2, 1);
  const weekday = format(now, 'eeee');
  return (
    <p>
      Today is {weekday}, March {addOrdinalSuffix(differenceInDays(now, march))}
      , 2020
    </p>
  );
};

export default Index;

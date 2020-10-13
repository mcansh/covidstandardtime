import React from 'react';
import { NextPage } from 'next';
import { differenceInDays, format } from 'date-fns';

import { addOrdinalSuffix } from '~/utils/add-ordinal-suffix';

const Index: NextPage = () => {
  const now = new Date();
  const march = new Date(2020, 2, 1);
  const weekday = format(now, 'eeee');
  const diff = differenceInDays(now, march);

  return (
    <div className="flex items-center justify-center h-full">
      <h1 className="px-4 text-2xl font-medium text-center sm:px-0 sm:text-3xl">
        Today is {weekday},{' '}
        <span className="whitespace-no-wrap sm:whitespace-normal">
          March {addOrdinalSuffix(diff)}, 2020
        </span>
      </h1>
    </div>
  );
};

export default Index;

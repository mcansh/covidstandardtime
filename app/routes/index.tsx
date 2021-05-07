import * as React from 'react';
import { differenceInDays, format } from 'date-fns';
import { RouteComponent, LoaderFunction, useRouteData } from 'remix';
import { json } from 'remix-utils';

import { addOrdinalSuffix } from '../utils/add-ordinal-suffix';
import { fetcher } from '../utils/fetcher';
import type { GeoApiSuccessResponse } from '../types/geo';
import { utcToZonedTime } from 'date-fns-tz';

const loader: LoaderFunction = async ({ request }) => {
  const ip =
    process.env.IP ??
    request.headers.get('x-real-ip') ??
    request.headers.get('cf-connecting-ip');

  try {
    const data = await fetcher<GeoApiSuccessResponse>(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.API_KEY}&ip=${ip}`
    );

    const timeZone = data.time_zone.name;

    const now = new Date();

    const zoned = utcToZonedTime(now, timeZone);

    const march = new Date(2020, 2, 1);
    const weekday = format(zoned, 'eeee');
    const diff = differenceInDays(zoned, march);

    return json({ weekday, diff });
  } catch (error) {
    console.error(error);

    return json({});
  }
};

const Index: RouteComponent = () => {
  const data = useRouteData();

  if (!data) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <div className="flex items-center justify-center h-full">
      <h1 className="px-4 text-2xl font-medium text-center sm:px-0 sm:text-3xl">
        Today is {data.weekday},{' '}
        <span className="whitespace-no-wrap sm:whitespace-normal">
          March {addOrdinalSuffix(data.diff)}, 2020
        </span>
      </h1>
    </div>
  );
};

export default Index;
export { loader };

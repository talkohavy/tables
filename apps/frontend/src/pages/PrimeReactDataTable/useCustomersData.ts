import { useCallback, useEffect, useState } from 'react';
import { isEmpty, wrapInThrottle } from '@talkohavy/lodash';

/** @param {{page?: any, itemsPerPage?: any}} props */
export default function useCustomersData(props = {}) {
  const [customers, setCustomers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line
  const fetchCustomersThrottled = useCallback(
    wrapInThrottle(async () => {
      setIsLoading(true);
      const searchQueryParams = isEmpty(props) ? '' : `?${new URLSearchParams(props)}`;
      fetch(`http://localhost:8000/customers${searchQueryParams}`, { method: 'GET' }).then((customersRaw) =>
        customersRaw.json().then(({ data }) => {
          setCustomers(data);
          setIsLoading(false);
        }),
      );
    }, 10000),
    [props],
  );

  useEffect(() => {
    fetchCustomersThrottled();
  }, [fetchCustomersThrottled]);

  return { data: customers, isLoading };
}

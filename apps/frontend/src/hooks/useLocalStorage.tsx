import React, { useCallback, useEffect, useState } from 'react';

export function useLocalStorage(key) {
  const [value, setValue] = useState(() => JSON.parse(localStorage.getItem(key)));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const deleteValue = useCallback(() => localStorage.removeItem(key), [key]);

  return [value, setValue, deleteValue];
}

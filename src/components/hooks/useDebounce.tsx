import { useState, useEffect } from "react";

export const useDebounce = (value: string, delayInMillisecond: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delayInMillisecond);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delayInMillisecond]);
  return debouncedValue;
};

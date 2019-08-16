import React, { useEffect, useRef } from 'react';

function useTimeout(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    if (delay !== null) {
      const id = setTimeout(savedCallback.current, delay);
      return () => clearTimeout(id);
    }
  }, [delay]);
}

export default useTimeout;

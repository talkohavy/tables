import { useCallback, useState } from 'react';
import { wrapInDebounce } from '../utils/wrapInDebounce';
import useEventListener from './useEventListener';

/**
 * @param {{
 *    wrapperRef: any,
 *    fnToRun?: (value: any) => void,
 *    shouldNotRender?: boolean,
 *    ms?: number,
 * }} props
 */
export function useWidthHeightResize({ wrapperRef, fnToRun, ms = 300, shouldNotRender }) {
  const [size, setSize] = useState({ width: 0, height: 0 });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedCallback = useCallback(
    wrapInDebounce(() => {
      const { width, height } = wrapperRef.current.getBoundingClientRect();
      const newSize = { width, height };
      setSize(newSize);
      fnToRun?.(newSize);
    }, ms),
    []
  );

  useEventListener({
    eventType: 'resize',
    fnToRun: memoizedCallback,
    dependencies: [shouldNotRender],
    shouldNotRender,
  });

  return size;
}

import React, { useEffect, useRef } from 'react';
import { wrapInDebounce } from '../utils/wrapInDebounce';

/**
 * @param {{
 *    eventType: string,
 *    fnToRun: (props: any) => void,
 *    dependencies?: Array,
 *    element?: any,
 *    ms?: number,
 *    shouldNotRender?: boolean
 * }} props
 */
export default function useEventListener({
  eventType,
  fnToRun,
  dependencies = [],
  element = window,
  ms = 300,
  shouldNotRender,
}) {
  const callbackRef = useRef(fnToRun);

  useEffect(() => ((callbackRef.current = wrapInDebounce(fnToRun, ms)), undefined), [fnToRun, ms]);

  useEffect(() => {
    if (shouldNotRender) return;

    element.addEventListener(eventType, callbackRef.current);

    callbackRef.current();

    return () => element.removeEventListener(eventType, callbackRef.current);
  }, dependencies);
}

import { useEffect, useRef } from 'react';
import { wrapInDebounce } from '../utils/wrapInDebounce';

type UseEventListenerProps = {
  eventType: string;
  fnToRun: () => void;
  dependencies?: Array<any>;
  element?: any;
  ms?: number;
  shouldNotRender?: boolean;
};

export default function useEventListener(props: UseEventListenerProps) {
  const { eventType, fnToRun, dependencies = [], element = window, ms = 300, shouldNotRender } = props;

  const callbackRef = useRef(fnToRun);

  useEffect(() => ((callbackRef.current = wrapInDebounce(fnToRun, ms)), undefined), [fnToRun, ms]);

  useEffect(() => {
    if (shouldNotRender) return;

    element.addEventListener(eventType, callbackRef.current);

    callbackRef.current();

    return () => element.removeEventListener(eventType, callbackRef.current);
    // eslint-disable-next-line
  }, dependencies);
}

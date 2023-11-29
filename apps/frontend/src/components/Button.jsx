import clsx from 'clsx';

/**
 * @param {{
 *    children: string | JSX.Element,
 *    onClick?: () => void,
 *    onMouseOver?: () => void,
 *    isDisabled?: boolean,
 *    className?: string,
 *    style?: any,
 *    testId?: string,
 * }} props
 */
export default function Button({ children, onClick, onMouseOver, isDisabled, className, style, testId }) {
  return (
    <button
      type='button'
      onClick={onClick}
      onMouseOver={onMouseOver}
      disabled={isDisabled}
      className={clsx('flex cursor-pointer items-center justify-center', className)}
      style={style}
      data-test-id={`${testId}Button`}
    >
      {children}
    </button>
  );
}

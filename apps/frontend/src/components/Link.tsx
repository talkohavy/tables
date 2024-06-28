import { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

type MyLinkProps = PropsWithChildren<{
  to: string;
  onClick?: () => void;
  onMouseOver?: () => void;
  className?: string;
  style?: any;
  testId?: string;
}>;

export default function MyLink(props: MyLinkProps) {
  const { to, onClick, onMouseOver, children, className, style, testId } = props;

  return (
    <Link
      to={to}
      onClick={onClick}
      onMouseOver={onMouseOver}
      className={clsx('flex cursor-pointer items-center justify-center', className)}
      style={style}
      data-test-id={`${testId}Link`}
    >
      {children}
    </Link>
  );
}

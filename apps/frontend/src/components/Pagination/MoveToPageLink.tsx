type MoveToPageLinkProps = {
  pageNumber: number;
  className?: string;
  onClick?: () => void;
};

export default function MoveToPageLink(props: MoveToPageLinkProps) {
  const { pageNumber, className, onClick } = props;

  return (
    <div key={pageNumber} onClick={onClick} className={className}>
      {pageNumber}
    </div>
  );
}

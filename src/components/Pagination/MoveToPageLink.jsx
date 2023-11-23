import React from 'react';

export default function MoveToPageLink({ pageNumber, className, onClick }) {
  return (
    <div key={pageNumber} onClick={onClick} className={className}>
      {pageNumber}
    </div>
  );
}

/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
19/06/2023            Joan      1.0.0           - Create Pagination component
20/06/2023            SawYN     1.0.1           - Fix minor bug
*/

import React, { Dispatch, SetStateAction } from 'react';
import {Pagination as BSPagination} from 'react-bootstrap';

interface PaginationProps {
  dataRendered: number;
  setDataRendered: Dispatch<SetStateAction<number>>;
  totalPages: number;
  maxPageShown: number;
  className?: string;
}

const Pagination = ({
  dataRendered,
  setDataRendered,
  totalPages,
  maxPageShown,
  className
}: PaginationProps) => {
  let startPage = Math.max(1, dataRendered - Math.floor(maxPageShown / 2));
  let endPage = Math.min(totalPages, startPage + maxPageShown - 1);


  const renderPaginationItem = () => {
    const dataArray = [];

    if(endPage === totalPages) {
        startPage = Math.max(1, endPage - maxPageShown + 1);
    }

    //Display pagination
    for(let page = startPage; page <= endPage; page++) {
        dataArray.push(
            <BSPagination.Item
                key={page}
                active={dataRendered === page}
                onClick={() => setDataRendered(page)}
                >
                {page}
            </BSPagination.Item>
        );
    }

    return dataArray;
  };

  return (
  <>
    <BSPagination className={className}>
      <BSPagination.Prev onClick={() => setDataRendered(dataRendered - 1)} disabled={dataRendered === 1} />

      {/* Previous <...> */}
      {(startPage > 1 && (totalPages/maxPageShown) > 1) && (<BSPagination.Ellipsis/>)}

      {/* Pagination item */}
      {renderPaginationItem()}

      {/* Next <...> */}
      {(endPage < totalPages) && (<BSPagination.Ellipsis/>)}

      <BSPagination.Next onClick={() => setDataRendered(dataRendered + 1)} disabled={dataRendered === totalPages} />
    </BSPagination>
  </>
  );
};

export default Pagination;
import React from 'react'
import Pagination from 'react-bootstrap/Pagination';


function PaginationBlock({totalPages=1, currentPage=1, clickHandle}) {
    let items = [];
    for (let number = 1; number <= totalPages; number++) {
    items.push(
        <Pagination.Item onClick={() => clickHandle(number)} key={number} active={number === currentPage} activeLabel={''}>
        {number}
        </Pagination.Item>,
    );
    
    }
  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>    
  )
}

export default PaginationBlock

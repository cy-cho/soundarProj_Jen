import React,{useState, useEffect} from 'react'

function Pagination(props) {

  // useEffect(() => {
  // props.articleListTotalRowsAsync(page,category, tags, sort, search)
  // }, [])
  
  // useEffect(() => {
  //   props.articleListTotalRowsAsync(page,category,tags,sort,search)
  // },[])
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination d-flex justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
         
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Pagination

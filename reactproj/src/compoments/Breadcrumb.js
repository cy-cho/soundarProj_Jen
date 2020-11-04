import React from 'react'
import { GrEdit } from "react-icons/gr";

function Breadcrumb(props) {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#"><GrEdit className="icon mx-1" />專欄首頁</a>
          </li>
          {/* <li class="breadcrumb-item">
            <a href="#">Library</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Data
          </li> */}
        </ol>
      </nav>
    </>
  )
}

export default Breadcrumb

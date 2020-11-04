import React from 'react'
import CategoryBtn from './../compoments/CategoryBtn'
import { FaSearch } from 'react-icons/fa'

function Searchbar(props) {
  return (
    <>
      <div className="d-flex">
        <div className="article-search-wrap ">
          <input className="article-search-input" />
          <button
            className="btn text-info article-search-btn "
            onClick={() => {
              props.dispatch({})
            }}
          >
            搜尋
          </button>
          <FaSearch className="icon-search"/>
        </div>
        <div>
          <CategoryBtn btnText="全部分類" />
          <CategoryBtn btnText="官方公告" />
          <CategoryBtn btnText="活動訊息" />
          <CategoryBtn btnText="Podcast相關" />
          <CategoryBtn btnText="每週頻道推薦" />
        </div>
      </div>
    </>
  )
}

export default Searchbar

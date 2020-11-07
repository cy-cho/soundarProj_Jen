import React,{useState} from 'react'
import { FaSearch } from 'react-icons/fa'

function Searchbar(props) {
  const [value, setValue] = useState('')
  return (
    <>
      <div className="d-flex">
        <div className="article-search-wrap ">
          <input className="article-search-input" type="search" placeholder="Search" onChange={(event) =>{setValue(event.target.value)}} />
          <button type="submit" className=" article-search-btn" onClick={()=>props.setSearch(value)}>
            搜尋
          </button>
          <FaSearch className="icon"/>
        </div>
      </div>
    </>
  )
}

export default Searchbar

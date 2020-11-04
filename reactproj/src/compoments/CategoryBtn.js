import React from 'react'

function CategoryBtn(props) {
    
    return (<>
        <button className="btn article-cate-btn text-info" onClick={()=>{props.dispatch({})}}>{props.btnText}</button>
    </>)
}

export default CategoryBtn
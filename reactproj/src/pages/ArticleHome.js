import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { FaTags, FaHotjar } from 'react-icons/fa'
import { MdAutorenew } from 'react-icons/md'

import ArticleCarousel from './../compoments/ArticleCarousel'
import Breadcrumb from './../compoments/Breadcrumb'
import Searchbar from './../compoments/Searchbar'
import TagsBtn from './../compoments/TagsBtn'
import Pagination from './../compoments/Pagination'

import { getArticleList, getArticleListAsync } from '../actions/index'

function ArticleHome(props) {
  console.log(props)

  //componentDidMount
  useEffect(() => {
    async function initialData() {
      await props.getArticleListAsync()
    }
    initialData()
  }, [])

  return (
    <>
      <ArticleCarousel />
      <div className="container mx-auto">
        <Breadcrumb />
        <div className="article-cate-row">
          <Searchbar />
        </div>
        <div className="article-tags-row d-flex justify-content-between">
          <div>
            <FaTags className="icon" />
            <TagsBtn btnText="新聞" />
            <TagsBtn btnText="商業" />
            <TagsBtn btnText="科技" />
            <TagsBtn btnText="教育" />
            <TagsBtn btnText="故事" />
            <TagsBtn btnText="娛樂" />
            <TagsBtn btnText="運動" />
          </div>{' '}
          <div>
            <span className="">
              <MdAutorenew className="icon" />
              {''}最新專欄
            </span>
            <span className="">
              <FaHotjar className="icon" />
              {''}熱門專欄
            </span>
          </div>
        </div>
        <div className="row">
          {/* 將每個row使用map至各個card中 */}
          {props.articleData.map((item) => {
            return (
              <div
                key={item.sid}
                className="card d-flex flex-row align-items-center"
              >
                <div className="card-date text-center align-items-center">
                  <h4>
                    {/* 該時間為字串,非dateTime需先變成dateTime格式才使用getDate() */}
                    {new Date(item.article_created_at).getDate()}
                    <br />
                    {/* 先變換時間格式,再取得月份 */}
                     {new Date(item.article_created_at).toDateString().slice(4,8)}
                  </h4>
                </div>
                <div className="card-img">
                  <img
                    // src="http://localhost:3000/img/article02.jpg"
                    src={item.article_img_name}
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{item.article_title}</h5>
                  <p className="card-content  text-wrap">
                    {item.article_content}
                  </p>
                  <div className="d-flex">
                    <span className="card-cates">{item.article_category}</span>
                    {/* tags原為字串,需變成陣列才map至各個span中 */}
                      {(item.article_tags.split(',')).map((tag, index) => {
                      return (
                    <span key={index}>
                          <TagsBtn btnText={tag} />
                        </span>
                      )
                    })}
                    <span className="card-cates text-right ml-auto">
                      繼續閱讀
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <Pagination />
      </div>
    </>
  )
}

//取得redux中store的值
const mapStateToProps = (store) => {
  return { articleData: store.articleList }
}
export default connect(mapStateToProps, {
  getArticleList,
  getArticleListAsync,
})(ArticleHome)
// export default ArticleHome

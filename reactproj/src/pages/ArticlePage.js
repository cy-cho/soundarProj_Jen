import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
//icons
import { GrEdit } from 'react-icons/gr'
//components
import ArticleCarousel from './../compoments/ArticleCarousel'
import ArticleComment from './../compoments/ArticleComment'
//actions
import { getArticleDetail, getArticleDetailAsync } from '../actions/index'

function ArticlePage(props) {

  //componentDidMount
  useEffect(() => {
    props.getArticleDetailAsync(props.match.params.sid)
    
  }, [])

  //componentDidUpdate
  // useEffect(() => {
  // },[])

  return (
    <>
      {' '}
      <ArticleCarousel />
      <div className="container mx-auto">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={'/'}>
                <GrEdit className="icon mx-1" />
                專欄首頁
              </Link>
            </li>
            {props.articleDetailData.map((item, index) => {
              return(
              <li className="breadcrumb-item">
                <Link>{item.article_title}</Link>
              </li>
           ) })}
          </ol>
        </nav>
        {/* Content */}
        <div className="d-flex">
          {props.articleDetailData.map((item, index) => {
            return (
              <>
                <div className="article-page-date" key={item}>
                  {/* 該時間為字串,非dateTime需先變成dateTime格式才使用getDate() */}
                  {new Date(item.article_created_at).getDate()}
                  <br />
                  {/* 先變換時間格式,再取得月份 */}
                  {new Date(item.article_created_at).toDateString().slice(4, 8)}
                </div>
                <div className="article-content-wrap">
                  <div className="article-title">{item.article_title}</div>
                  <div className="article-img">
                    <img src={item.article_img_url} alt="..." />
                  </div>
                  <div className="article-font-change text-right">
                    <span>字體大小：</span>
                    <span>小</span>
                    <span>中</span>
                    <span>大</span>
                  </div>
                  <div className="article-content-area">
                    {item.article_content}
                  </div>
                  <div className="article-page-category d-flex align-content-center">
                    <span className="span-font mr-1">專欄分類：</span>
                    <span className="span-font mr-5">
                      {item.article_category}
                    </span>
                    <span className="span-font mr-1 my-auto">標籤分類：</span>
                    {/* tags原為字串,需變成陣列才map至各個span中 */}
                    {item.article_tags.split(',').map((tag, index) => {
                      return (
                        <span key={index}>
                          <Link to={'/'}>
                            <button
                              type="button"
                              className="btn article-tags-btn text-info"
                              onClick={() => {
                                props.setTags(`${tag}`)
                              }}
                            >
                              {tag}
                            </button>
                          </Link>
                        </span>
                      )
                    })}
                  </div>

                  <div className="article-page-others d-flex justify-content-between">
                    <div className="article-page-previous">
                      <span>上一篇：</span>
                      <span></span>
                    </div>
                    <div className="article-page-next">
                      <span>下一篇：</span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>

        <ArticleComment />
      </div>
    </>
  )
}
//取得redux中store的值
const mapStateToProps = (store) => {
  return { articleDetailData: store.articleDetail }
}
export default withRouter(
  connect(mapStateToProps, { getArticleDetail, getArticleDetailAsync })(
    ArticlePage
  )
)

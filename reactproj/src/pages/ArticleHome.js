import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { FaTags, FaHotjar, FaCaretRight} from 'react-icons/fa'
import { MdAutorenew } from 'react-icons/md'

import ArticleCarousel from './../compoments/ArticleCarousel'
import Breadcrumb from './../compoments/Breadcrumb'
import Searchbar from './../compoments/Searchbar'
import CategoryBtn from './../compoments/CategoryBtn'
import Pagination from './../compoments/Pagination'

import { getArticleList, getArticleListAsync } from '../actions/index'


function ArticleHome(props) {
  console.log(props)

  const [page, setPage] = useState(1)
  const [category, setCategory] = useState('')
  const [tags, setTags] = useState('')
  const [sort, setSort] = useState(false) //對應API 未設置排序預設為最新專欄(flase)
  const [search, setSearch] = useState('')
  // const [active, setActive] = useState(false)

  //componentDidMount
  useEffect(() => {
    props.getArticleListAsync(page, category, tags, sort, search)
  }, [])

  //compomentDidUpadate
  useEffect(() => {
    //給定所有useState造成update的參數
    props.getArticleListAsync(page, category, tags, sort, search)
  }, [page, category, tags, search, sort])

  return (
    <>
      <ArticleCarousel />
      <div className="container mx-auto">
        <Breadcrumb />
        <div className="article-cate-row d-flex ">
          <Searchbar search={search} setSearch={setSearch}/>
          <div>
            <CategoryBtn
              category="全部分類"
              clickMethod={() => {
                setCategory('')
              }}
            />
            <CategoryBtn
              category="官方公告"
              clickMethod={() => {
                setCategory('官方公告')
              }}
            />
            <CategoryBtn
              category="活動訊息"
              clickMethod={() => {
                setCategory('活動訊息')
              }}
            />
            <CategoryBtn
              category="Podcast相關"
              clickMethod={() => {
                setCategory('Podcast相關')
              }}
            />
            <CategoryBtn
              category="每週頻道推薦"
              clickMethod={() => {
                setCategory('每週頻道推薦')
              }}
            />
          </div>
        </div>
        <div className="article-tags-row d-flex justify-content-between">
          <div>
            <FaTags className="icon" />
            <button
              type="button"
              className="btn article-tags-btn text-info"
              onClick={() => {
                setTags('')
              }}
            >
              全部
            </button>
            <button
              type="button"
              className="btn article-tags-btn text-info"
              style={{'border':'solid 1px #b9e3ff'}}
              onClick={() => {
                setTags('新聞')
              }}
            >
              新聞
            </button>
            <button
              type="button"
              className="btn article-tags-btn text-info"
              style={{'border':'solid 1px #fadb28'}}
              onClick={() => {
                setTags('商業')
              }}
            >
              商業
            </button>
            <button
              type="button"
              className="btn article-tags-btn text-info"
              style={{'border':'solid 1px #84e5bd'}}
              onClick={() => {
                setTags('科技')
              }}
            >
              科技
            </button>
            <button
              type="button"
              className="btn article-tags-btn text-info"
              style={{'border':'solid 1px #f780ae'}}
              onClick={() => {
                setTags('教育')
              }}
            >
              教育
            </button>
            <button
              type="button"
              className="btn article-tags-btn text-info"
              style={{'border':'solid 1px #846def'}}
              onClick={() => {
                setTags('故事')
              }}
            >
              故事
            </button>
            <button
              type="button"
              className="btn article-tags-btn text-info"
              style={{'border':'solid 1px #f7aa99'}}
              onClick={() => {
                setTags('娛樂')
              }}
            >
              娛樂
            </button>
            <button
              type="button"
              className="btn article-tags-btn text-info"
              style={{'border':'solid 1px #f8f8f8'}}
              onClick={() => {
                setTags('運動')
              }}
            >
              運動
            </button>
            {/* <TagsBtn tag="新聞" />
            <TagsBtn tag="商業" />
            <TagsBtn tag="科技" />
            <TagsBtn tag="教育" />
            <TagsBtn tag="故事" />
            <TagsBtn tag="娛樂" />
            <TagsBtn tag="運動" /> */}
          </div>{' '}
          <div>
            <span
              className=""
              onClick={() => {
                setSort(false)
              }}
            >
              <MdAutorenew className="icon" />
              {''}最新專欄
            </span>
            <span
              className=""
              onClick={() => {
                setSort(true)
              }}
            >
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
                    {new Date(item.article_created_at)
                      .toDateString()
                      .slice(4, 8)}
                  </h4>
                </div>
                <div className="card-img">
                  <img
                    // src="http://localhost:3000/img/article02.jpg"
                    src={item.article_img_url}
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                  <FaCaretRight className="icon" />{item.article_title}</h5>
                  <p className="card-content  text-wrap">
                    {item.article_content}
                  </p>
                  <div className="d-flex">
                    <span className="card-cates">{item.article_category}</span>
                    {/* tags原為字串,需變成陣列才map至各個span中 */}
                    {item.article_tags.split(',').map((tag, index) => {
                      return (
                        <span key={index}>
                          <button
                            type="button"
                            className="btn article-tags-btn text-info"
                            onClick={() => {
                              setTags(`${tag}`)
                            }}
                          >
                            {tag}
                          </button>
                          {/* <TagsBtn tag={tag} /> */}
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
        <Pagination page={page} setPage={setPage}/>
      </div>
    </>
  )
}

//取得redux中store的值
const mapStateToProps = (store) => {
  return { articleData: store.articleList }
}
export default withRouter(
  connect(mapStateToProps, {
    getArticleList,
    getArticleListAsync,
  })(ArticleHome)
)
// export default ArticleHome

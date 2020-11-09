import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import MyNavbar from './component/MyNavbar'
// import MainContent from './component/MainContent'
// import MyFooter from './component/MyFooter'
import ArticleHome from './Jen/pages/ArticleHome'
import ArticlePage from './Jen/pages/ArticlePage'
import ScrollToTop from './Jen/components/ScrollToTop'

function App(props) {
  return (
    <Router>
      <>
        {/* <MyNavbar /> */}
        {/* <MainContent> */}
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <ArticleHome />
            </Route>
            <Route path="/articlepage/:sid">
              <ArticlePage />
            </Route>
          </Switch>
        </ScrollToTop>
        {/* </MainContent>  */}
        {/* <MyFooter /> */}
      </>
    </Router>
  )
}

export default App;

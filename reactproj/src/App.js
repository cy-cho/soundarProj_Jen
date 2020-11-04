import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import MyNavbar from './component/MyNavbar'
// import MainContent from './component/MainContent'
// import MyFooter from './component/MyFooter'
import ArticleHome from './pages/ArticleHome'
import ArticlePage from './pages/ArticlePage'

function App() {
  return (
    <Router>
      <>
        {/* <MyNavbar /> */}
        {/* <MainContent> */}
        <Switch>
          <Route exact path="/">
            <ArticleHome />
          </Route>
          <Route path="/articlepage">
            <ArticlePage />
          </Route>
          </Switch>
          {/* </MainContent>  */}
        {/* <MyFooter /> */}
      </>
    </Router>
  );
}

export default App;

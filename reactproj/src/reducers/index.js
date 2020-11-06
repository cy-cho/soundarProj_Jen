import { combineReducers } from 'redux'
import articleList from './articleList'
import articleListPages from './articleListPages'
import articleListTotalRows from './articleListTotalRows'
import articleDetail from './articleDetail'


export const rootReducer = combineReducers({articleList, articleDetail,articleListPages, articleListTotalRows})
import { combineReducers } from 'redux'
import articleList from './articleList'
import articleDetail from './articleDetail'


export const rootReducer = combineReducers({articleList, articleDetail})
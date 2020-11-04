import {GET_ARTICLE_LIST} from './../actions/actionTypes'

//get article data
export default function getArticleList(state = [
    // sid: '',
    // article_create_at: '',
    // article_title: '',
    // article_img_name: '',
    // article_category: '',
    // article_tags: [],
    // article_content: '',
    // article_clicks:'',
], action) {
    switch (action.type) {
        case GET_ARTICLE_LIST:
            return action.payload
        default:
            return state
    }
}




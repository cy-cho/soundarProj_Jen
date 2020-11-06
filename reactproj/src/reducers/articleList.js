import { GET_ARTICLE_LIST } from './../actions/actionTypes'

//get article data(必為陣列，後續需要map，後續需要map代入各個row)
export default function getArticleList(state = [], action) {
    switch (action.type) {
        case GET_ARTICLE_LIST:
            return action.payload[0]
        default:
            return state
    }
}




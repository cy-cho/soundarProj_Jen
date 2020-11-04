import { GET_ARTICLE_LIST} from './actionTypes'

//aciotn creator-get list
export const getArticleList = (payload) => {
    return {type:GET_ARTICLE_LIST,payload:payload}
}
//
export const getArticleListAsync = () => {
    return async function getArticleListFromServer(dispatch) {

        // let query = []
        // if(payload) query.push(dispatch)
        const url = `http://localhost:5566/article/`;
        
        const request = new Request(url, {
            method: 'GET',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }),
        })

        const response = await fetch(request)
        const data = await response.json()
        dispatch(getArticleList(data))
        
    }
}
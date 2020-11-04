import { GET_ARTICLE_DETAIL, GET_ARTICLE_LIST} from './actionTypes'

//aciotn creator-get list
export const getArticleList = (payload) => {
    return {type:GET_ARTICLE_LIST,payload:payload}
}

export const getArticleListAsync = (page,category, tags, sort, search) => {
    return async function getArticleListFromServer(dispatch) {

        //欲加入網址列需使用字串(將條件也設定在fetch API來獲取已篩選過的資料)
        let query = ''
        if (page) query += `&page=${page}`
        if (category) query += `&category=${category}`
        if (tags) query += `&tags=${tags}`
        if (sort) query += `&sort=${sort}`
        if (search) query += `&search=${search}`
        const url = `http://localhost:5566/article/?${query}`;
        
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

//aciotn creator-get detail
export const getArticleDetail = (payload) => {
    return {type:GET_ARTICLE_DETAIL,payload:payload}
}

export const getArticleDetailAsync = (sid) => {
    return async function getArticleDetailFromServer(dispatch) {

        //欲加入網址列需使用字串(將條件也設定在fetch API來獲取已篩選過的資料)
        const url = `http://localhost:5566/article/${sid}`;
        
        const request = new Request(url, {
            method: 'GET',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }),
        })

        const response = await fetch(request)
        const data = await response.json()
        dispatch(getArticleDetail(data))
        
    }
}


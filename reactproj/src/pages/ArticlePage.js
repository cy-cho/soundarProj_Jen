import React from 'react'

import ArticleCarousel from './../compoments/ArticleCarousel';
import Breadcrumb from './../compoments/Breadcrumb';
import ArticleContent from './../compoments/ArticleContent';
import ArticleComment from './../compoments/ArticleComment';


function ArticlePage(props) {
    return(
        <> <ArticleCarousel />
            <div className="container mx-auto">
                <Breadcrumb />
                <ArticleContent />
                <ArticleComment />
        </div>
            </>
    )
}
export default ArticlePage
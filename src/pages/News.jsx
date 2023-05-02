import React from 'react';
import Header from '../components/header';
import Article from '../components/article';
import ThumbnailArticle from '../assets/article/article.jpg';
import ThumbnailArticleBis from '../assets/article/article1.jpg';


function News() {
  return (
    <div className='news'>
      <Header className="border" background={false} />
      <div className="content">
        <h2>News</h2>
        <div className="d-flex">
          <Article title="Lorem glavrida nulla dolor ipsum" date="May 3, 2017" imageUrl={ ThumbnailArticle }/>
          <Article title="New lorem nulla dolor glavrida" date="May 3, 2017" imageUrl={ ThumbnailArticleBis }/>
          <Article title="New lorem nulla dolor glavrida" date="May 3, 2017" imageUrl={ ThumbnailArticleBis }/>
          <Article title="New lorem nulla dolor glavrida" date="May 3, 2017" imageUrl={ ThumbnailArticle }/>
        </div>
      </div>
    </div>
  );
}

export default News;
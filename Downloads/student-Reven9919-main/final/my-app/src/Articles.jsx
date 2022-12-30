import './Articles.css';
import articleData from './articles-data';


function Articles(onNav){


    const list = articleData.map( (article) => {

        return(
            <li key={article.id}>
                <div className='article__card'>
                    <h2>{article.title}</h2>
                    <img className= "article__pic" src = {article.pic} alt= {article.alt}/>
                    <p className='article__blurb'>{article.blurb}</p>
                    <a 
                        className='article__link'
                        href={`#${article.title.replaceAll('','-')}`}
                        // onClick = {onNav}
                        data-page={article.id}
                        aria-label={article.title}
                        >
                        read more
                    </a>
                </div>
            </li>
        );
    });
    return(
        <>
        <div className='articles'>
            <ul className='articles__list'>
                {list}
            </ul>
        </div>
        
        </>
    );

}

export default Articles;

import './Main.css';

import Articles from './Articles';
import ArticleSemanticCSS from './ArticlesSemanticCSS';
import About from './About';
import Resources from './Resources';


function Main({page, onNav}){
    return(
        <main id="main" className='main'>
            Main - {page}
            {page === 'Articles' && <Articles onNav = {onNav}/>}
            {page === 'ArticleSemanticCss' && <ArticleSemanticCSS/>}
            {page === 'About' && <About/>}
            {page === 'Resources' && <Resources/>}
            
        </main>
    )
}

export default Main;
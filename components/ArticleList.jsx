import articleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'


const ArticleList = ({ articles }) => {
    return (
        <div className={articleStyles.grid}>           
            {/* {
                articles.map(article => <h3>{article.title} &rarr;</h3>)
            } */}
            
            {
                articles.map(article => <ArticleItem key={article.id} article={article} />)
            }
        </div>
    )
}

export default ArticleList
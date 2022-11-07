import Head from 'next/head'
import ArticleItem from '../components/ArticleItem'
import ArticleList from '../components/ArticleList'


const Home = ({ articles }) => {
    // console.log(articles)

    return (
        <div>
            {/* Move to Layout Component
                <Head>
                    <title>WebDev Newz</title>
                    <meta name='keywords' content='web development, programming'/>
                </Head> 
            */}

            {/* <h1>Welcome to NextJS!</h1> */}

            {/* {
                articles.map(article => <h3>{article.title}</h3>)
            } */}

            <ArticleList articles={articles} />
        </div>
    )
}

/**
 * Render Only When Running Build
 */
// export const getStaticProps = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//     const articles = await res.json()
//     return {
//         props: { articles }
//     }
// }
/////////////////////////////////////////////////////////////////////////
/**
 * Using /api Route
 */
import { server } from '../config'

export const getStaticProps = async () => {
    // const res = await fetch(`http://localhost:3000/api/articles`)
    const res = await fetch(`${server}/api/articles`)
    const articles = await res.json()
    return {
        props: { articles }
    }
}

export default Home
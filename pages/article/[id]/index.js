import { useRouter } from 'next/router'
import Link from 'next/link'
import Meta from '../../../components/Meta'


const Article = ({ article }) => {
    /**
     * Use Hook
     */
    // const router = useRouter()
    // const { id } = router.query
    // return (
    //     <div>This is article {id}.</div>
    // )

    /**
     * Use Server Side Props
     */
    return (
        <>
            {/* <div>This is article {article.id}.</div> */}

            <Meta title={article.title} description={article.excerpt}/>

            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href='/'>&larr; Go Back</Link>
        </>
        
    )
}

/** 
 * Render Whenever Requesting to Server
 */
// export const getServerSideProps = async (ctx) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${ctx.params.id}`)
//     const article = await res.json()
//     return {
//         props: { article }
//     }
// }

/////////////////////////////////////////////////////////////////////////
/**
 * Static Site Generation
 */
// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//     const articles = await res.json()
//     const ids = articles.map(article => article.id)
//     const paths = ids.map(id => ({ params: { id: id.toString() } }))
//     return {
//         /**
//          * Paths Example
//          */
//         // paths: [ { params: { id: '1' } }, { params: { id: '2' } }, ... ],

//         paths,
//         fallback: false, // Show 'Not Found' Page
//     }
// }
/**
 * Without getStaticProps, getStaticPaths does nothing
 */
// export const getStaticProps = async (ctx) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${ctx.params.id}`)
//     const article = await res.json()
//     return {
//         props: { article }
//     }
// }

/////////////////////////////////////////////////////////////////////////
/**
 * Using /api Route
 */
import { server } from '../../../config'

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`)
    const articles = await res.json()
    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({ params: { id: id.toString() } }))
    return {
        paths,
        fallback: false,
    }
}
export const getStaticProps = async (ctx) => {
    const res = await fetch(`${server}/api/articles/${ctx.params.id}`)
    const article = await res.json()
    return {
        props: { article }
    }
}
/////////////////////////////////////////////////////////////////////////

export default Article
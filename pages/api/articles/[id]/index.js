import articles from '../../../../data'


// const handler = (req, res) => {
//     // console.log(req.params.id) // TypeError
//     const article = articles.find(article => article.id === req.query.id)
//     if (!article) {
//         res.status(404).json({ 
//             message: `Article id ${req.query.id} is not found.`
//         })
//     } else {
//         res.status(200).json(article)
//     }
// }

/**
 * OR
 */
const handler = ({ query: { id } }, res) => {
    const filtered = articles.filter(article => article.id === id)
    if (filtered.length < 1) {
        res.status(404).json({ 
            message: `Article id ${id} is not found.`
        })
    } else {
        res.status(200).json(filtered[0])
    }
}

export default handler
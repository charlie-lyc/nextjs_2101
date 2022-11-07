import layoutStyles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'
import Meta from './Meta'

const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <Nav />
            <div className={layoutStyles.container}>
                <Header />
                <main className={layoutStyles.main}>
                    { children }
                </main>
            </div>
        </>

    )
}

export default Layout
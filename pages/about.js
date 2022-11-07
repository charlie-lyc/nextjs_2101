import Head from 'next/head'
import Meta from '../components/Meta'


const About = () => {
    return (
        <div>
            {/* Move to Layout Component
                <Head>
                    <title>WebDev Newz | About</title>
                </Head> 
            */}

            <Meta title='WebDev Newz | About' />

            <h1>About</h1>
        </div>
    )
}

export default About
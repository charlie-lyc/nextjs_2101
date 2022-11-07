import headerStyles from '../styles/Header.module.css'


const Header = () => {
    // const x = 3
    // const x = 5

    return (
        <div>
            {/* <h1 className='title'> */}
            <h1 className={headerStyles.title}>
                <span>WebDev</span> News
            </h1>
            <p className={headerStyles.description}>
                Keep up to date with the latest web dev news.
            </p>

            {/* 
            <style jsx>
                {`
                    .title {
                        color: ${ x > 3 ? 'blue' : 'red' };
                        text-align: center;
                    }
                `}
            </style> 
            */}
            
        </div>
    )
}

export default Header
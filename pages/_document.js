// Custom Document : https://nextjs.org/docs/advanced-features/custom-document
import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
    return (
        <Html lang='en'>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
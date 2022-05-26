// import { AppProps } from 'next/app'
import Layout from '../components/Layout/layout'

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
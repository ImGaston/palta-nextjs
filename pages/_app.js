import { ChakraProvider } from '@chakra-ui/react'
// import { AppProps } from 'next/app'
import Layout from '../components/Layout/layout'

function MyApp({ Component, pageProps }) {
    return (
    <ChakraProvider>
        <Layout>
        <Component {...pageProps} />
        </Layout>
    </ChakraProvider>
    )
}

export default MyApp
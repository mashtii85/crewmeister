/**
 * Pages - _App
 */

//Next
import { AppProps } from 'next/app'
import Head from 'next/head'

//Styles
import './styles.css'

//ReactQuery
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Welcome to crewmeister!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  )
}

export default CustomApp

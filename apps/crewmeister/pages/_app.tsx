/**
 * Pages - _App
 */

//Next
import { AppProps } from 'next/app'
import Head from 'next/head'

//Styles
import './styles.css'
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css'

//ReactQuery
import { QueryClient, QueryClientProvider } from 'react-query'
import { MemberProvider } from '@crewmeister-code-challenge/ui-components'

const queryClient = new QueryClient()

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Welcome to crewmeister!</title>
      </Head>
      <main className="app">
        <MemberProvider>
          <Component {...pageProps} />
        </MemberProvider>
      </main>
    </QueryClientProvider>
  )
}

export default CustomApp

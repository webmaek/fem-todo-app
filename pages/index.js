import Head from 'next/head'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Todo from '../components/Todo/Todo'

export default function Home() {
  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />
      <Todo />
      <Footer />
    </>
  )
}

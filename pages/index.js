import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome to my Next.js site!</title>
        <link rel="icon" href="/ic_fox.png" />
      </Head>

      <main>
        <Header title="Narcotics Thailv" />
        <p className="description">
          <code>Nước trong quá thì không có cá, người tốt quá thì không ai yêu</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

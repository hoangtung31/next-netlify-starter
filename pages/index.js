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
        <Header title="Narcotics Anonymous" />
        <p className="description">
          <code>Insanity is doing the same thing, over and over again, but expecting different results.</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

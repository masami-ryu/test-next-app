import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'

export default function FirstPst() {
  return (
  <Layout>
    <Head>
      <title>First Post</title>
    </Head>
    <Script
      src="https://connect.facebook.net/en_US/sdk.js"
      strategy='lazyOnload'
      onLoad={() => {
        console.log("script loaded correctly, window.FB has been populated")
      }}
    ></Script>
    <h1>First Post</h1>
    <h2>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </h2>
    <Image
      src="/images/profile.jpg"
      height={389}
      width={373}
      alt="masami"
    >

    </Image>
  </Layout>
  );
}
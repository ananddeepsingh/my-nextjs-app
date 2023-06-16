import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function Home () {
  return <>
    <Head><title>Home</title></Head>
    <h1>Home Page</h1>
    <ul>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/offers/mobile">Mobile</Link></li>
    </ul>
    
    <Image src="/images/poster.jpeg" height={400} width={400}/>
  </>
}

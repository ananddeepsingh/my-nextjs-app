import Head from "next/head";
import Link from "next/link";

export default function About() {
  return <>
    <Head><title>About</title></Head>
    <h1> About <Link href="/">back</Link></h1>
    
  </>
}

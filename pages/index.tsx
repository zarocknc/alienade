import Head from 'next/head'
import Link from 'next/link'
import Tiptap from '@/components/textEditor/Tiptap'

export default function Home() {



  return (
    <>
      <Head>
        <title>NonFreeman</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div >
          <h1 className='text-3xl underline'>hola</h1>
          <p>holiwis</p>
          <Tiptap />
        </div>
      </main>
    </>
  )
}

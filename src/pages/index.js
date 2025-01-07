import GeneralEnquireForm from "@/components/GeneralEnquireForm";
import Header from "@/components/Header";
import Head from "next/head";


export default function Home() {
  
  return (
    <>
      <Head>
        <title>Profile Management</title>
        <meta
          name="description"
          content="A profile management application built with Next.js and Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white">
        <div className="container contents">
          <Header/>
          <GeneralEnquireForm/>
        </div>
      </main>
    </>
  );
}
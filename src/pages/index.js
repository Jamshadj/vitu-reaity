import GeneralEnquireForm from "@/components/GeneralEnquireForm";
import Header from "@/components/Header";
import Head from "next/head";


export default function Home() {
  
  return (
    <>
      <Head>
        <title>Vitu Realty</title>
        <meta
          name="description"
          content=""
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
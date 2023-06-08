import React from "react"
import Head from "next/head"

import HomeHero from "@/components/home/home-hero"
import Layout from "@/components/layout"

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Expertio</title>
        <meta name="description" content="Expertio" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <HomeHero />
      </Layout>
    </>
  )
}

export default HomePage

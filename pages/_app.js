import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'

import 'normalize.css'
import '../static/css/global.css'

const description = (
  `Dino is a frontend engineer based in Sarajevo with over five years of software development experience. He is ` +
  `currently developing applications using React, Next.js, TypeScript, D3.js, HTML and CSS`
)

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Dino Hamzić &mdash; Software Engineer</title>
          <meta name="description" content={description} />
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp

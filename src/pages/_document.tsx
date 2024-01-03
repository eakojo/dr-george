/* eslint-disable */
import { Html, Head,  Main, NextScript } from 'next/document'
import { Analytics } from '@vercel/analytics/react'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <body>
        <Main />
        <Analytics />
        <NextScript />
      </body>
    </Html>
  )
}

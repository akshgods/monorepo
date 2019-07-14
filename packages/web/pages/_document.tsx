import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'
import { AppRegistry } from 'react-native'
import { ThemeProvider } from '@boilerplate/ui';

// Force Next-generated DOM elements to fill their parent's height
const normalizeNextElements = `
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }: any) {
    AppRegistry.registerComponent('Main', () => Main)
    // @ts-ignore getApplication is React Native Web addition for SSR.
    const { getStyleElement } = AppRegistry.getApplication('Main')
    const page = renderPage()
    const styles = [
      <style dangerouslySetInnerHTML={{ __html: normalizeNextElements }} />,
      getStyleElement()
    ]
    return { ...page, styles: React.Children.toArray(styles) }
  }

  render () {
    return (
      <html style={{ height: '100%' }}>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <body style={{ height: '100%', overflow: 'hidden' }}>
          <ThemeProvider>
            <Main />
          </ThemeProvider>
          <NextScript />
        </body>
      </html>
    )
  }
}
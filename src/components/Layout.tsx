import * as React from 'react'
// import {Header} from './Header'
// import {Footer} from './Footer'
import Head from 'next/head'
import * as css from './Layout.css'

export class Layout extends React.Component<{}, {}> {
  render() {
    const {children} = this.props
    return (
      <div>
        {/*language=PostCSS*/}
        <style jsx global>{`//global stylesheet
        body {
          margin: 0;
        }
        `}
        </style>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <main className={ css.layout }>
          {children}
        </main>
      </div>
    )
  }
}

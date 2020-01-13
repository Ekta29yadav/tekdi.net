import React from 'react'
import { Helmet } from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import './common.css'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}images/favicon/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}images/favicon/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}images/favicon/favicon-16x16.png`}
          sizes="16x16"
        />

        {/* <link
          rel="mask-icon"
          href={`${withPrefix('/')}images/safari-pinned-tab.svg`}
          color="#ff4400"
        /> */}
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}images/og-image.jpg`}
        />
      </Helmet>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import SEO from './seo'
import { Link } from './link'
import { H3 } from './typography'
import Logo from '../../static/logo.svg'
import Img from "gatsby-image"

import '../styles/index.sass'
import classes from '../styles/layout.module.sass'

const Layout = ({ isHome, title, description, children }) => {
    return (
        <StaticQuery
            query={graphql`
                {
                    file(relativePath: {eq: "circle-cropped.png"}) {
                        childImageSharp {
                          fixed(width: 125, height: 125){
                            ...GatsbyImageSharpFixed
                        }
                        }
                      }
                    site {
                        siteMetadata {
                            title
                            description
                            bio
                            showProfileImage
                            footerLinks {
                                text
                                url
                            }
                        }
                    }
                }
            `}
            render={data => {
                const meta = data.site.siteMetadata
                return (
                    <>
                        <SEO title={title} description={description} />
                        <main className={classes.root}>
                            {!isHome && (
                                <h1 className={classes.logo}>
                                    <Link hidden to="/">
                                        <Logo width={150} height={54} aria-label={meta.title} />
                                    </Link>
                                </h1>
                            )}
                            <div className={classes.content}>
                                {(title || description) && (
                                    <header className={classes.header}>
                                        {title && <h1 className={classes.title}>{title}</h1>}
                                        {description && (
                                            <p className={classes.description}>{description}</p>
                                        )}
                                    </header>
                                )}
                                {children}
                            </div>

                            <footer className={classes.footer}>
                                <div className={classes.footerContent}>
                                    <section className={classes.footerSection}>
                                        <H3>Authors</H3>
                                        <ul>
                                        <li><a href="https://www.aaronconway.info"> Aaron Conway </a> (Peter Munk Cardiac Centre, UHN &amp; Lawrence S. Bloomberg Faculty of Nursing, University of Toronto)</li>
  <li>Megan Bittner  (Lawrence S. Bloomberg Faculty of Nursing, University of Toronto)</li>
  <li>Dan Phan  (Lawrence S. Bloomberg Faculty of Nursing, University of Toronto)</li>
  <li>Navpreet Kamboj  (Lawrence S. Bloomberg Faculty of Nursing, University of Toronto)</li>
  <li>Kristina Chang  (Toronto General Hospital, UHN)</li>
  <li>Elizabeth Tipton (Dapartment of Statistics, Northwestern University)</li>
  <li>Matteo Parotto  (Toronto General Hospital, UHN)</li>
                                        </ul>
                                      </section>

                                    <section className={classes.footerSection}>
                                        <H3>About me</H3>
                                        {meta.showProfileImage && (
                                            <Img fixed={data.file.childImageSharp.fixed}
                                            className={classes.profile}
                                            />
                                        )}
                                        <p>{meta.bio}</p>
                                    </section>

                                    {meta.footerLinks && (
                                        <ul className={classes.footerLinks}>
                                            {meta.footerLinks.map(({ text, url }, i) => (
                                                <li key={i} className={classes.footerLink}>
                                                    <Link variant="secondary" to={url}>
                                                        {text}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </footer>
                        </main>
                    </>
                )
            }}
        />
    )
}

export default Layout

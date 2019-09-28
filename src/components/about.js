import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import aboutStyles from './about.module.scss'

const About = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
      edges {
        node{
          frontmatter{
            title
            avatar
            skills
          }
          html
        }
      }
    }
  }
  `)
  return(
    <div>
      {data.allMarkdownRemark.edges.map((edge) => {
      return (
        <about>
          <h1>{edge.node.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML = {{__html: edge.node.html}} />
          <a href="mailto:ttangcs@gmail.com" className={aboutStyles.getInTouch}>Get in Touch</a>
        </about>
      )
    })}
    </div>
  )
}

export default About
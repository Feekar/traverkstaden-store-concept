import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Service from './service';
import styles from './services.module.scss';
// import BackgroundImage from 'gatsby-background-image';

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { eq: "services" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                services {
                  title
                  text
                  image {
                    childImageSharp {
                      fluid(quality: 90, maxWidth: 600) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const {
    services,
  } = data.allFile.edges[0].node.childMarkdownRemark.frontmatter;

  return (
    <div className={styles.services}>
      <h2>Vad jag gör</h2>
      {services.map(service => (
        <Service
          title={service.title}
          text={service.text}
          image={service.image}
          key={service.title}
        />
      ))}
    </div>
  );
};

export default Services;

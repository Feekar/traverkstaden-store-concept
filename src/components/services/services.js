import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { FiArrowRight } from 'react-icons/fi';
import Service from './service';
import styles from './services.module.scss';

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
    <div id="services" className={styles.services}>
      <h2>Vad jag gör</h2>
      <div className={styles.servicesBackground}>
        <section className={styles.servicesWrapper}>
          {services.map(service => (
            <Service
              title={service.title}
              text={service.text}
              image={service.image}
              key={service.title}
            />
          ))}
          <Link to="/furnitures" className={styles.linkButton}>
            Se mina bilder
            <FiArrowRight className={styles.arrowRight} />
          </Link>
        </section>
      </div>

    </div>
  );
};

export default Services;

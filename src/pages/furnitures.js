import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';
import Furniture from '../components/furniture/furniture';

const Furnitures = () => {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "furniture" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter{
              title
              description
              image{
                childImageSharp{
                  fluid(maxWidth: 500, quality: 100){
                    ...GatsbyImageSharpFluid
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
  const furnitures = data.allFile.edges.map(edge => edge.node.childMarkdownRemark.frontmatter);
  return (
    <Layout>
      <>
        <Head title="Möbler | " />
        {furnitures.map(furniture => <Furniture key={furniture.description} {...furniture} />)}
      </>
    </Layout>
  );
};

export default Furnitures;

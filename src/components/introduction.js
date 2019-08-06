import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Introduction = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentYaml(
      filter: {
        introduction: {text: {ne: null}}
      }
    ) {
      edges {
        node {
          introduction{
            text
            image          
          }
        }
      }
    }
  }`);

  const content = data.allContentYaml.edges[0].node.introduction;

  return <span>{content.text}</span>;
};


export default Introduction;

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Introduction = () => {
  const data = useStaticQuery(graphql`
    query {
        allContentYaml{
          edges{
            node{
              introduction{
                image
                text
              }
            }
          }
        }
      }
    `);
    //   const content = data.allContentYaml.edges.find(edge => edge.node.services !== null);
  console.log(data);
  return <span>test</span>;
};


export default Introduction;

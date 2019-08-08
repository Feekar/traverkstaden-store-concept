import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Introduction = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { eq: "introduction" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                text
                image
              }
            }
          }
        }
      }
    }
  `);

  const content = data.allFile.edges[0].node.childMarkdownRemark.frontmatter;

  return <span>{content.text}</span>;
};

export default Introduction;

// query{
//   allFile(filter: {name: {eq: "introduction"}}
//   ) {
//     edges{
//       node{
//         childMarkdownRemark{
//           frontmatter{
//             text
//             image
//           }
//         }
//       }
//     }
//   }
// }

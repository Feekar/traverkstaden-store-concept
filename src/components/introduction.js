import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';

const Introduction = () => {
  // const data = useStaticQuery(graphql`
  // query {
  //   allContentYaml(
  //     filter: {
  //       introduction: {text: {ne: null}}
  //     }
  //   ) {
  //     edges {
  //       node {
  //         introduction{
  //           text
  //           image
  //         }
  //       }
  //     }
  //   }
  // }`);
  const test = 2;
  console.log(test);

  // const content = data.allContentYaml.edges[0].node.introduction;

  return <span>test</span>;
};

export default Introduction;

// query{
//   file(name: {eq: "introduction"}) {
//     childMarkdownRemark {
//       frontmatter{
//         introduction{
//           text
//           image
//         }
//       }
//     }
//   }
// }

import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';

const Introduction = () => {
  console.log('test');

  return <span>test</span>;
  // const data = useStaticQuery(graphql`
  //   query {
  //     file(name: { eq: "introduction" }) {
  //       childMarkdownRemark {
  //         frontmatter {
  //           introduction {
  //             text
  //             image
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  // const content = data.file.childMarkdownRemark.frontmatter.introduction;

  // return <span>{content.text}</span>;
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

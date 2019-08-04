import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Introduction = () => {
  const data = useStaticQuery(graphql`
    query {
        allContentYaml{
          edges{
            node{
              services{
                          furniture{
                  image
                  text
                }          
              }
            }
          }
        }
      }
    `);
  console.log(data);
  return <span>test</span>;
};


export default Introduction;

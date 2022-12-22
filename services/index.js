import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query Posts {
      postsConnection {
        edges {
          node {
            author {
              name
              id
              bio
              photo {
                url
              }
            }
            createdAt
            slug
            title
            exerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `

  const result = await  request(graphqlAPI, query);

  return result.postsConnection.edges;
}

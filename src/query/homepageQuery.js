import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query postsQuery {
    posts {
      edges {
        node {
          costruction {
            costruction {
              buttonText
              description
              title
            }
          }
          team {
            team {
              btnText
              description
              title
            }
          }
          constructionProjects {
            constructionProjects {
              card1 {
                title
                projectImg {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
              card2 {
                title
                projectImg {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
              card3 {
                title
                projectImg {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
              card4 {
                title
                projectImg {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
              card5 {
                title
                projectImg {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
            }
          }
          rutzky {
            fieldGroupName
            cards {
              cardOne {
                description
                fieldGroupName
                text
                icon {
                  node {
                    id
                    altText
                    title
                    sourceUrl
                  }
                }
              }
              cardTwo {
                icon {
                  node {
                    altText

                    title
                    sourceUrl
                  }
                  cursor
                }
                description
                title
              }
              cardThree {
                title
                description
                icon {
                  node {
                    id
                    altText
                    title
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

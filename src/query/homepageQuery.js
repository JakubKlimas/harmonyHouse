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
          quotes {
            quotes {
              card1 {
                btntext
                description
              }
              card2 {
                btntext
                description
              }
              card3 {
                btntext
                description
              }
              card4 {
                btntext
                description
              }
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

export const GET_FINANSE_PAGE = gql`
  query NewQuery {
    posts {
      nodes {
        rutzky {
          cards {
            fieldGroupName
          }
        }
        finanse {
          finanse {
            mainimage {
              node {
                altText
                sourceUrl
              }
            }
            sectionone {
              benefits {
                benefitone {
                  icon {
                    node {
                      sourceUrl
                      altText
                    }
                  }
                  title
                }
                benefittree {
                  title
                  icon {
                    node {
                      altText
                      sourceUrl
                    }
                  }
                }
                benefittwo {
                  title
                  icon {
                    node {
                      sourceUrl
                      altText
                    }
                  }
                }
              }
              title
              description
            }
            sectiontwo {
              image {
                node {
                  altText
                  sourceUrl
                }
              }
              btntext
              description
            }
          }
        }
      }
    }
  }
`;

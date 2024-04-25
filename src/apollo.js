import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://itdojoblog.wpengine.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    "Content-Type": "application/json",
  },
  fetchOptions: {
    mode: "no-cors",
  },
});

export default client;

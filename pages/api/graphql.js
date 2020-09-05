import { ApolloServer, gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    user: String,
    email: String
  }
`;

const test_user = 'jaguar'
const test_email = 'jaguar@gmail.com'

const resolvers = {
    Query: {
      user: () => test_user,
      email: () => test_email,
    },
  };

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {};
  }
});

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export const config = {
  api: {
    bodyParser: false
  }
};

export default handler;
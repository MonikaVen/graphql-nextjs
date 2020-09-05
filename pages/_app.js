import '../styles/globals.css'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql'
});
function MyApp({ Component, pageProps }) {
  
  return <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
}

export default MyApp

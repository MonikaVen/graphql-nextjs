import Head from 'next/head'
import styles from '../styles/Home.module.css'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export default function Home() {
  const USER_QUERY = gql`
    {
      user
      email
    }
  `;
  const { loading, error, data } = useQuery(USER_QUERY);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.log(error)
    return <p>Error :(</p>;
  } 
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App with GraphQL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
            <div className="App">
          <header className="App-header">
            <p>
              User is: {data.user}
            </p>
            <p>
              Email is: {data.email}
            </p>
          </header>
        </div>

      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

import Head from 'next/head'
import Box from '../components/Box'
import Header from './Header'

export const Layout: React.FC = ({ children }) => {
  return (
    <Box>
      <Head>
        <title>Julian Furchert</title>
      </Head>
      <Header />
      <Box css={{marginTop: 100}}>
        {children}
      </Box>
    </Box>
  )
}

export default Layout

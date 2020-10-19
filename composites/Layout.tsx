import Head from 'next/head'
import Box from '../components/Box'
import Header from './Header'

type LayoutProps = {
  toggleTheme: () => void
}

export const Layout: React.FC<LayoutProps> = ({ toggleTheme, children }) => {
  return (
    <Box>
      <Head>
        <title>Julian Furchert</title>
      </Head>
      <Header toggleTheme={toggleTheme} />
      <Box css={{marginTop: 100}}>
        {children}
      </Box>
    </Box>
  )
}

export default Layout

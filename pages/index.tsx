import dynamic from 'next/dynamic'
import {Container, Box, Flex} from '../components'

import TypeScanner from '../thumbnails/TypeScanner'
import PrettyPaper from '../thumbnails/PrettyPaper'
import ReproFont from '../thumbnails/ReproFront'
import Seading from '../thumbnails/Seading'
const Framo = dynamic( () => import('../thumbnails/Framo'), { ssr: false } )

export default function Home() {
  return (
    <Container>
      <Box css={{marginBottom: 160}}>
        <Flex 
          css={{ 
            justifyContent: 'space-between'
          }}
        >
          {/* <TypeScanner css={{maxWidth: '40%'}} /> */}
          <PrettyPaper 
            css={{
              maxWidth: '40%'
            }} 
          />
        </Flex >
        <Flex 
          css={{ 
            justifyContent: 'space-between', 
            marginTop: 200
          }}>
          <Seading 
            css={{
              bp2: { maxWidth: '40%' }
            }} 
          />
          <Framo 
            css={{ 
              bp2: {
                marginTop: '20vw',
                maxWidth: '40%',
              }
            }} 
          />
        </Flex>
      </Box>
    </Container>
  )
}

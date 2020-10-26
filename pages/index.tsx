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
      <Box>
        <Flex css={{ justifyContent: 'space-between'}}>
          {/* <TypeScanner css={{maxWidth: '40%'}} /> */}
          <PrettyPaper css={{maxWidth: '40%'}} />
        </Flex >
        <Flex css={{ justifyContent: 'center' }} >
          {/* <ReproFont css={{maxWidth: '40%'}} /> */}
        </Flex>
        <Flex css={{ justifyContent: 'space-between', marginTop: '$4'}}>
          <Seading css={{maxWidth: '40%'}} />
          {/* <Framo /> */}
        </Flex>
      </Box>
    </Container>
  )
}

import Link from 'next/link'
import dynamic from 'next/dynamic'

import Box from '../components/Box'
import Text from '../components/Text'
import Grid from '../components/Grid'
import Card from '../components/Card'
import Container from '../components/Container'

import TypeScanner from '../thumbnails/TypeScanner'
// import Framo from '../thumbnails/Framo'
import Denkwerk from '../thumbnails/Denkwerk'
import PrettyPaper from '../thumbnails/PrettyPaper'
import Theves from '../thumbnails/Theves'
import ReproFont from '../thumbnails/ReproFront'
const Framo = dynamic( () => import('../thumbnails/Framo'), { ssr: false } )

export default function Home() {
  return (
    <Container>
      <Box>
        <Text variant="headline" css={{marginBottom: 20}}>
          Julian Furchert
        </Text>
        <Text variant="bodyLarge">
          Hi, I’m Julian Furchert, a designer and developer based in Düsseldorf. Specializing in user interface design and typography. Furthermore, I‘m working on experimental tools and custom design applications.
        </Text>
      </Box>
      <Box css={{marginTop: 100}}>
        <Text variant="headline2">
          Some Projects
        </Text>
        <Grid>
          <Link href="/projects/typescanner" passHref>
            <Card as="a" variant="preview">
              <TypeScanner />
            </Card>
          </Link>
          <Link href="/projects/framo" passHref>
            <Card as="a" variant="preview">
              <Framo />
            </Card>
          </Link>
          <Link href="/projects/denkwerk" passHref>
            <Card as="a" variant="preview">
              <Denkwerk />
            </Card>
          </Link>
          <Link href="/projects/prettypaper" passHref>
            <Card as="a" variant="preview">
              {/* <Theves /> */}
            </Card>
          </Link>
          <Link href="/projects/theves" passHref>
            <Card as="a" variant="preview">
              <TypeScanner />
            </Card>
          </Link>
          <Link href="/projects/reprofont" passHref>
            <Card as="a" variant="preview">
              <ReproFont />
            </Card>
          </Link>
        </Grid>
      </Box>
      <Box css={{marginTop: 100}}>
        <Text variant="headline2">
          Digital Garden
        </Text>
        <Grid>
        <Card as="a" href="https://www.google.de/">
            <Text css={{fontWeight: '$heading'}}>
              Tools I use
            </Text>
            <Text>
              Updated 3 weeks ago
            </Text>
          </Card>
          <Card as="a" href="https://www.google.de/">
            <Text css={{fontWeight: '$heading'}}>
              Design Systems
            </Text>
            <Text>
              Updated 4 weeks ago
            </Text>
          </Card>
          <Card as="a" href="https://www.google.de/">
            <Text css={{fontWeight: '$heading'}}>
              Gatsby
            </Text>
            <Text>
              Updated 5 weeks ago
            </Text>
          </Card>
        </Grid>
      </Box>
      <Box css={{height: 400}} />
    </Container>
  )
}

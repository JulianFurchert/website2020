import Link from 'next/link'

import Box from '../components/Box'
import Text from '../components/Text'
import Grid from '../components/Grid'
import Card from '../components/Card'
import Layout from '../components/Layout'
import Container from '../components/Container'

import TypeScanner from '../thumbnails/TypeScanner'
import Framo from '../thumbnails/Framo'
import Denkwerk from '../thumbnails/Denkwerk'
import PrettyPaper from '../thumbnails/PrettyPaper'
import Theves from '../thumbnails/Theves'
import ReproFont from '../thumbnails/ReproFont'

export default function Home() {
  return (
    <Layout>
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
            Projects
          </Text>
          <Grid>
            <Link href="/projects/typescanner" passHref>
              <Card as="a" variant="preview">
                <TypeScanner />
              </Card>
            </Link>
            <Link href="/projects/typescanner" passHref>
              <Card variant="preview">
                <Framo />
              </Card>
            </Link>
            <Link href="/projects/typescanner" passHref>
              <Card variant="preview">
                <PrettyPaper />
              </Card>
            </Link>
            <Link href="/projects/typescanner" passHref>
              <Card variant="preview">
                <Theves />
              </Card>
            </Link>
            <Link href="/projects/typescanner" passHref>
              <Card variant="preview">
                <TypeScanner />
              </Card>
            </Link>
            {/* <Link href="/projects/typescanner" passHref> */}
              <Card variant="preview">
                <ReproFont />
              </Card>
            {/* </Link> */}
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
    </Layout>
  )
}

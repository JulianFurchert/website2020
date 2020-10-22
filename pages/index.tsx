import Link from 'next/link'
import dynamic from 'next/dynamic'
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
      <Grid size="large">
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
        <Link href="/projects/typescanner" passHref>
          <Card as="a" variant="preview">
            <TypeScanner />
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
    </Container>
  )
}

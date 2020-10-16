
import React from  'react'
import { Text, Layout, Container, AspectRatio, Box, Row, Viewcase, ImageCase } from '../../../components'

export default function Home() {
  return (
    <Layout>
      <Container>
        <Text variant="headline" css={{marginBottom: 20}}>
          Framo
        </Text>
        <Text variant="bodyLarge">
          Hi, I’m Julian Furchert, a designer and developer based in Düsseldorf. Specializing in user interface design and typography. Furthermore, I‘m working on experimental tools and custom design applications.
        </Text>
      </Container>
      <Container size="large">
        <Row>
          <ImageCase 
            image="/projects/prettypaper/img/video_gray.jpg"
          />
          <ImageCase 
            image="/projects/prettypaper/img/video_gray.jpg"
            scheme="dark"
          />
        </Row>
        <Row>
          <ImageCase 
            image="/projects/prettypaper/img/video_gray.jpg"
          />
          <ImageCase 
            image="/projects/prettypaper/img/video_gray.jpg"
          />
        </Row>
        <Row>
          <ImageCase 
            image="/projects/prettypaper/img/video_gray.jpg"
            scheme="dark"
          />
        </Row>
        <Row>
          <Viewcase ratio={[2,1]} />
        </Row>
      </Container>
    </Layout>
  )
}

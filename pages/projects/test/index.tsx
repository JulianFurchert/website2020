
import React from  'react'
import { Text, Container, Row, Showcase, ImageCase } from '../../../components'

export default function Home() {
  return (
    <React.Fragment>
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
          <Showcase ratio={[2,1]} />
        </Row>
      </Container>
    </React.Fragment>
  )
}

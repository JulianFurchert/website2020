
import React from  'react'
import { Text, Layout, Container, AspectRatio, Box, Row, Viewcase } from '../../../components'

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
          <Viewcase scheme="dark" template="none">
            <Box 
              css={{
                height: 200, 
                width: 200, 
                backgroundColor: '$primary'
              }} 
            />
          </Viewcase>
          <Viewcase>
            <Box 
              css={{
                height: 200, 
                width: 200, 
                backgroundColor: '$primary'
              }} 
            />
          </Viewcase>
        </Row>
        <Row>
          <Viewcase  scheme="dark" template="window">
            <Box 
              css={{
                height: 200, 
                width: 200, 
                backgroundColor: '$primary'
              }} 
            />
          </Viewcase>
          <Viewcase>
            Test
          </Viewcase>
        </Row>
        <Row>
          <Viewcase ratio={[2,1]} />
        </Row>
      </Container>
    </Layout>
  )
}

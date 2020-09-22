
import React from  'react'
import Text from '../components/Text'
import Layout from '../components/Layout'
import Container from '../components/Container'

export default function Home() {
  return (
    <Layout>
      <Container>
        <Text variant="headline" css={{marginBottom: 20}}>
          Digital Garden
        </Text>
        <Text variant="bodyLarge">
          Hi, I’m Julian Furchert, a designer and developer based in Düsseldorf. Specializing in user interface design and typography. Furthermore, I‘m working on experimental tools and custom design applications.
        </Text>
      </Container>
    </Layout>
  )
}

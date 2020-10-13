
import React from  'react'
import { Text, Layout, Container } from '../../../components'

export default function Home() {
  return (
    <Layout>
      <Container>
        <Text variant="headline" css={{marginBottom: 20}}>
          Theves
        </Text>
        <Text variant="bodyLarge">
          Hi, I’m Julian Furchert, a designer and developer based in Düsseldorf. Specializing in user interface design and typography. Furthermore, I‘m working on experimental tools and custom design applications.
        </Text>
      </Container>
    </Layout>
  )
}

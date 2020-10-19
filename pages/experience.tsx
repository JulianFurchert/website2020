
import React from  'react'
import Text from '../components/Text'
import Container from '../components/Container'

export default function Home() {
  return (
    <Container>
      <Text variant="headline" css={{marginBottom: 20}}>
        Experience
      </Text>
      <Text variant="bodyLarge">
        Hi, I’m Julian Furchert, a designer and developer based in Düsseldorf. Specializing in user interface design and typography. Furthermore, I‘m working on experimental tools and custom design applications.
      </Text>
    </Container>
  )
}

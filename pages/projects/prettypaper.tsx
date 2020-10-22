
import React from  'react'
import { Text, Container } from '../../components'

export default function Home() {
  return (
    <React.Fragment>
      <Container>
        <Text variant="headline" css={{marginBottom: 20}}>
          Pretty Paper
        </Text>
        <Text variant="bodyLarge">
          Hi, I’m Julian Furchert, a designer and developer based in Düsseldorf. Specializing in user interface design and typography. Furthermore, I‘m working on experimental tools and custom design applications.
        </Text>
      </Container>
      <Container size="large">
      </Container>
    </React.Fragment>
  )
}

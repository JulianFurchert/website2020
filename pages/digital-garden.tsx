
import React, { useEffect } from  'react'
import Text from '../components/Text'
import Container from '../components/Container'
import client from '../client'

export default function Home() {
  useEffect(()=>{
    async function getPosts() {
      const entries = await client.getEntries()
      console.log(entries)
    }
    getPosts()
  },[])

  return (
    <Container>
      <Text variant="headline" css={{marginBottom: 20}}>
        Digital Garden
      </Text>
      <Text variant="bodyLarge">
        Hi, I’m Julian Furchert, a designer and developer based in Düsseldorf. Specializing in user interface design and typography. Furthermore, I‘m working on experimental tools and custom design applications.
      </Text>
    </Container>
  )
}

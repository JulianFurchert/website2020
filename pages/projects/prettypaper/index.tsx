
import React from  'react'
import { Text, Layout, Container, Box, Block } from '../../../components'
import Color from './components/Color';
import Font from './components/Font';

export default function Home() {
  return (
    <Layout>
      <Container>
        <Text variant="headline" css={{marginBottom: 20}}>
          Pretty Paper
        </Text>
        <Text variant="bodyLarge">
          Hi, I’m Julian Furchert, a designer and developer based in Düsseldorf. Specializing in user interface design and typography. Furthermore, I‘m working on experimental tools and custom design applications.
        </Text>
      </Container>
      <Container size="large">
        <Block.Video
          bg="#272527"
          width={1}
          video="/projects/prettypaper/videos/video_gray-large.mp4"
          poster="/projects/prettypaper/img/video_gray.jpg"
          fullSize
          mockup={{
            width: 1280
          }}
        />
        <Color />
        <Font />
      </Container>
    </Layout>
  )
}

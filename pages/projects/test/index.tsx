
import React from  'react'
import { ProjectTemplate } from '../../../composites'
import { Row, Showcase, ComponentCase, ImageCase } from '../../../components'
import TestA from './components/TestA'
import TestB from './components/TestB'

export default function Home() {
  return (
    <ProjectTemplate
      title="Framo"
      text="Hi, I’m Julian Furchert, a designer and developer based in Düsseldorf. Specializing in user interface design and typography. Furthermore, I‘m working on experimental tools and custom design applications."
    >
      <Row>
        <ImageCase image="/projects/prettypaper/img/video_gray.jpg" />
        <ImageCase 
          image="/projects/prettypaper/img/video_gray.jpg"
          scheme="dark"
        />
      </Row>
      <Row>
        <ImageCase image="/projects/prettypaper/img/video_gray.jpg" />
        <ImageCase image="/projects/prettypaper/img/video_gray.jpg" />
      </Row>
      <Row>
        <ImageCase 
          image="/projects/prettypaper/img/video_gray.jpg"
          scheme="dark"
        />
      </Row>
      <Row>
        <ComponentCase component={<TestA />}/>
        <ComponentCase component={<TestB />}/>
      </Row>
      <Row>
        <Showcase ratio={[2,1]} />
      </Row>
    </ProjectTemplate>
  )
}

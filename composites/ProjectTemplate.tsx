
import React from  'react'
import { Text, Container } from '../components'

type ProjectTemplateProp = {
  title: string,
  text: string,
}

export const ProjectTemplate:React.FC<ProjectTemplateProp> = ({
  title,
  text,
  children
}) => {
  return (
    <React.Fragment>
      <Container css={{marginBottom: 60}}>
        <Text variant="headline" css={{marginBottom: 20}}>
          {title}
        </Text>
        <Text variant="bodyLarge">
          {text}
        </Text>
      </Container>
      <Container size="large" css={{marginX: '-10px'}}>
        {children}
      </Container>
    </React.Fragment>
  )
}

import React from  'react'
import { Text, Container, Box } from '../components'

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
    <Container>
      <Text variant="headline" css={{marginBottom: 20}}>
        {title}
      </Text>
      <Text variant="bodyLarge">
        {text}
      </Text>
      <Box css={{marginTop: 60}}>
        {children}
      </Box>
    </Container>
  )
}
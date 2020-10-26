
import React, { useEffect, useState } from  'react'
import {Text, Container, Box, Searchbox} from '../components'
import client from '../client'
import starWarsNames from 'starwars-names'

const test: {name: string, id: string}[] = starWarsNames.all.map((s) => ({name: s, id: s.toLowerCase()}))

const Portfolio_ID = '5uOiTr0hAQNZudb84WDyTS'
const Design_ID = '6qjEKai2kGuRssTWTH2PLt'

export default function DigitalGarden() {
  const [ allItems, setAllItems ] = useState<Items>([]);
  const [ currentItems, setCurrentItems ] = useState<Items>([]);
  const [ tags, setTags ] = useState<Tags>([]);
  const [ currentTags, setCurrentTags ] = useState<Tags>([]);

  useEffect(()=>{
    async function getPosts() {
      const entries = await client.getEntries();
      const items = entries.items as Items || [];
      let {currentEntries, tags} = filterByTags(items, [])
      setAllItems(items);
      setCurrentItems(currentEntries);
      setTags(tags);
      setCurrentTags(tags);
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
      <Box css={{marginTop: '$6'}}>
        <Searchbox items={test} />
      </Box>
      <Box css={{ marginTop: 80 }}>
        {allItems.map(entrie => (
          <Box css={{marginY: '$6'}}>
            <Text variant="headline2" css={{marginBottom: '$2'}}>
              {entrie.fields.title}
            </Text>
            <Text>
              {entrie.fields.url}
            </Text>
          </Box>
        ))}
      </Box>
    </Container>
  )
}

type FilterByTags = (allItems: Items, currentTags: Tags) => { currentEntries: Items, tags: Tags }

const filterByTags: FilterByTags = (entries, currentTags) => {
  const currentEntries = entries;
  const tags = [];
  return { currentEntries, tags }
}

type Tag = {
  fields: {
    name: string
  }
}[]

type Tags = Tag[]

type Item = {
  fields: {
    title: string,
    url: string,
    tags: Tags[]
  }
};

type Items = Item[]
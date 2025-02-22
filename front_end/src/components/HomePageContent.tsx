import React from 'react'
import Items from './Items'
import { Button, Text, Input } from '@chakra-ui/react'

const HomePageContent = () => {
  return (
    <section id='home-content'>
      <div id='view-school'>
        <Text fontSize='3xl'>Stony Brook University</Text>
        <Input id='search-box' placeholder='Search' size='lg'/>
      </div>
      <Items />
    </section>
  )
}

export default HomePageContent
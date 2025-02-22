import React, {useState} from 'react'
import Items from './Items'
import { Button, Text, Input } from '@chakra-ui/react'
import SortItemsMenu from './SortItemsMenu';

const HomePageContent = () => {
  const [sortMenu, setSortMenu] = useState(false);
  return (
    <section id='home-content'>
      <div id='view-school'>
        <Text id='university-name' fontSize='2xl'>Stony Brook University</Text>
        <Input id='search-box' placeholder='Search' size='lg'/>
        <Button onClick={() => setSortMenu(!sortMenu)}>Sort</Button>
      </div>
      {sortMenu && (
        <SortItemsMenu />
      )}
      <Items />
    </section>
  )
}

export default HomePageContent
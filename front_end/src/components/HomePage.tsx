import { Text } from '@chakra-ui/react'
import React from 'react'
import HomePageContent from './HomePageContent'
import HomePagePanel from './HomePagePanel'

const HomePage = () => {
  return (
    <main id="home-page">
        <HomePagePanel />
        <HomePageContent />
    </main>
  )
}

export default HomePage
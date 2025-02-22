import React from 'react'
import { Text, Button } from '@chakra-ui/react'
import { useUser } from './UserState'

const Header = () => {
    const {loggedIn} = useUser();
  return (
    <section className='header'>
        <Text fontSize='4xl'>SustainableShare</Text>
        {loggedIn ? (
            null // TODO
        ) : (
            <div id='buttons-group'>
                <Button>Log In</Button>
                <Button>Sign Up</Button>
            </div>
        )}
    </section>
  )
}

export default Header
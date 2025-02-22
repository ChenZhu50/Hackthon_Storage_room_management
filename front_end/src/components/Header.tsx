import React from 'react'
import { Text, Button } from '@chakra-ui/react'
import { useUser } from './UserState'
import { Link } from 'react-router-dom'

const Header = () => {
    const {loggedIn} = useUser();
  return (
    <section className='header'>
        <Link to='/'>
            <Text fontSize='4xl'>SustainableShare</Text>
        </Link>
        {loggedIn ? (
            null // TODO
        ) : (
            <div id='buttons-group'>
                <Link to='/login'>
                    <Button>Log In</Button>
                </Link>
                <Button>Sign Up</Button>
            </div>
        )}
    </section>
  )
}

export default Header
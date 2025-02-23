import React from "react";
import { Text, Button } from "@chakra-ui/react";
import { useUser } from "./UserState";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const { user, loggedIn } = useUser();
  return (
    <section className='header'>
        <Link to='/'>
            <Text fontSize='4xl'>SustainableShare</Text>
        </Link>
        {true ? (
            <div id='buttons-group'>
                <Link to={`/clubs/${"1"}/inventory`}>
                    <Button>Club Inventory</Button>
                </Link>
                <Button>Sign Out</Button>
            </div>
        ) : (
            <div id='buttons-group'>
                <Link to='/login'>
                    <Button>Log In</Button>
                </Link>
                <Button>Sign Up</Button>
            </div>
        )}
    </section>
  );
};

export default Header;

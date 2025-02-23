import React from "react";
import { Text, Button, HStack } from "@chakra-ui/react";
import { useUser } from "./UserState";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { user, loggedIn, signOut, fetchClubId } = useUser();
  return (
    <section className="header">
      <Link to="/">
        <Text fontSize="4xl">SustainableShare</Text>
      </Link>
      <HStack spacing={4}>
        {loggedIn() ? (
          <>
            <Link to={`/clubs/${fetchClubId()}/inventory`}>
              <Button>Club Inventory</Button>
            </Link>
            <Button onClick={signOut}>Sign Out</Button>
          </>
        ) : (
          <>
            <Link to="/login">
              <Button>Log In</Button>
            </Link>
            <Link to="/signup">
              <Button colorScheme="blue">Sign Up</Button>
            </Link>
          </>
        )}
      </HStack>
    </section>
  );
};

export default Header;

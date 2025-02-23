import React from "react";
import { Text, Button } from "@chakra-ui/react";
import { useUser } from "./UserState";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { loggedIn, user, setUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logging out...');
    console.log('Before logout - User:', user);
    console.log('Before logout - LocalStorage:', localStorage.getItem('user'));

    // 清除 React 状态
    setUser(null);
    // 清除 localStorage
    localStorage.removeItem('user');

    console.log('After logout - User:', user);
    console.log('After logout - LocalStorage:', localStorage.getItem('user'));

    // 跳转到首页
    navigate("/");
  };

  return (
    <section className="header">
      <Link to="/">
        <Text fontSize="4xl">SustainableShare</Text>
      </Link>
      {loggedIn() ? (
        <div id="buttons-group">
          <Text mr={4}>Welcome, {user?.username}</Text>
          <Button onClick={handleLogout}>Log Out</Button>
        </div>
      ) : (
        <div id="buttons-group">
          <Link to="/login">
            <Button mr={2}>Log In</Button>
          </Link>
          <Link to='/register'>
            <Button>Register</Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Header;

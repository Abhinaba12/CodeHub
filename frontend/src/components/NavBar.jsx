import React from 'react';
import { Flex, Link, Spacer, Box } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation(); // Get current location
  
  return (
    <Flex
      as="nav"
      p={2}
      alignItems="center"
      height="60px"
      color="black" 
      // White text color
    >
      <Link
        as={RouterLink}
        to="/"
        fontWeight="bold"
        _hover={{ textDecoration: 'none' }}
      >
        CodeHub
      </Link>
      <Spacer />
      <Box>
        <Link
          as={RouterLink}
          to="/"
          mx={4}
          color={location.pathname === '/' ? '#FF0000' : 'black'} // Cyan color if on Home page, otherwise white
          _hover={{ color: 'red', textDecoration: 'none' }} // Grey color on hover, no underline
        >
          HOME
        </Link>
        <Link
          as={RouterLink}
          to="/code-editor"
          mx={4}
          color={location.pathname === '/code-editor' ? '#FF0000' : 'black'} // Cyan color if on Code Editor page, otherwise white
          _hover={{ color: 'red', textDecoration: 'none' }} // Grey color on hover, no underline
        >
          WORKSPACE
        </Link>
        <Link
          as={RouterLink}
          to="/online-chat-bot"
          mx={4}
          color={location.pathname === '/online-chat-bot' ? '#FF0000' : 'black'} // Cyan color if on Chat Bot page, otherwise white
          _hover={{ color: 'red', textDecoration: 'none' }} // Grey color on hover, no underline
        >
          CHAT
        </Link>
        <Link
          as={RouterLink}
          to="/youtube-learning"
          mx={4}
          color={location.pathname === '/youtube-learning' ? '#FF0000' : 'black'} // Cyan color if on Learn To Code page, otherwise white
          _hover={{ color: 'red', textDecoration: 'none' }} // Grey color on hover, no underline
        >
          LEARN
        </Link>
        <Link
          as={RouterLink}
          to="/notes"
          mx={4}
          color={location.pathname === '/notes' ? '#FF0000' : 'black'} // Cyan color if on Notes page, otherwise white
          _hover={{ color: 'red', textDecoration: 'none' }} // Grey color on hover, no underline
        >
          NOTES
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;

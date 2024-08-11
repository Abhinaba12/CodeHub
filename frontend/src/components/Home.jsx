import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Center, Heading, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box height="100vh" position="relative" overflow="hidden" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bgGradient="white"
        bgSize="200%"
        className="animate-pulse-slow"
        style={{
          /* master.css */
          animation: 'move 2s ease-in-out infinite'
        }}
      ></Box>
      <Box zIndex="1" textAlign="center">
        <Heading as="h1" size="3xl" mb="4" fontWeight="bold" style={{ fontSize: '2.5rem' }}>
          Welcome To <span style={{ color: '#FF0000' }}>➡</span> Code<span style={{ color: '#FFA500' }}>Hub</span>
        </Heading>
        <Text fontSize="2xl" mb="8" style={{ fontSize: '1.5rem' }}>
          <span style={{ color: '#808080' }}>Learn, Practice & Explore The World of Coding...</span>
        </Text>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Link to="/code-editor">
            <Button
              colorScheme="black"
              size="md" // Make the buttons smaller overall
              mr="2"
              bg="black"
              color="white"
              width="125px" // Adjust the width of the buttons
              height="40px" // Adjust the height of the buttons
              borderRadius="20px"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.5)"
              transition="background-color 0.3s, transform 0.3s"
              _hover={{ bg: 'white', transform: 'scale(1.05)', color: '#000000' }}
              _active={{ bg: 'gray.900', transform: 'scale(0.95)' }}
            >
              Workspace
            </Button>
          </Link>
          <Link to="/youtube-learning">
            <Button mx="10"
              colorScheme="black"
              size="md" // Make the buttons smaller overall
              bg="black"
              color="white"
              width="125px" // Adjust the width of the buttons
              height="40px" // Adjust the height of the buttons
              borderRadius="20px"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.5)"
              transition="background-color 0.3s, transform 0.3s"
              _hover={{ bg: 'white', transform: 'scale(1.05)', color: '#000000' }}
              _active={{ bg: 'gray.900', transform: 'scale(0.95)' }}
            >
              Learn
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

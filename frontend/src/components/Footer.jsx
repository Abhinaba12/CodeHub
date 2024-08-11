import React, { useState } from 'react';
import { Box, Container, Flex, Link, Text } from "@chakra-ui/react";
import {FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [iconHovered, setIconHovered] = useState(null);

  return (
    <Box py={(8)}>
      <Container maxW="container.xl">
        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          justify="space-between"
          alignItems="center"
          textAlign={{ base: 'center', md: 'left' }} // Align text to the left on small screens and center on medium screens and above
        >
          <Box flex="1" mb={{ base: 4, md: 0 }}>
          </Box>
          <Flex
            justify="flex-middle"// Align icons to the right side of the page
            flex='1.1'
            mt={{ base: 4, md: 0 }}
          >
            <Link href='https://www.facebook.com/abhinabaroy123' isExternal mx={2} _hover={{ color: 'teal.500' }} _active={{ color: 'blue' }} onMouseEnter={() => setIconHovered('facebook')} onMouseLeave={() => setIconHovered(null)}><FaFacebook size={24} color={iconHovered === 'facebook' ? ' #3b5998' : 'black'} /></Link>
            <Link href='https://twitter.com/_abhinaba_roy_' isExternal mx={2} _hover={{ color: 'teal.500' }} _active={{ color: 'blue' }} onMouseEnter={() => setIconHovered('x')} onMouseLeave={() => setIconHovered(null)}><FaXTwitter size={24} color={iconHovered === 'x' ? '#000000' : 'black'} /></Link>
            <Link href='https://www.linkedin.com/in/abhinaba-roy-52b426196' isExternal mx={2} _hover={{ color: 'teal.500' }} _active={{ color: 'blue' }} onMouseEnter={() => setIconHovered('linkedin')} onMouseLeave={() => setIconHovered(null)}><FaLinkedin size={24} color={iconHovered === 'linkedin' ? '#0a66c2' : 'black'} /></Link>
            <Link href='https://github.com/Abhinaba12' isExternal mx={2} _hover={{ color: 'teal.500' }} _active={{ color: 'blue' }} onMouseEnter={() => setIconHovered('github')} onMouseLeave={() => setIconHovered(null)}><FaGithub size={24} color={iconHovered === 'github' ? '#000000' : 'black'} /></Link>
            <Link href='https://www.instagram.com/_mattersmore_' isExternal mx={2} _hover={{ color: 'teal.500' }} _active={{ color: 'blue' }} onMouseEnter={() => setIconHovered('instagram')} onMouseLeave={() => setIconHovered(null)}><FaInstagram size={24} color={iconHovered === 'instagram' ? '	#E1306C' : 'black'} /></Link>
          </Flex>
        </Flex>
        <Box textAlign="center" mt={8}>
          <Text>&copy;Copyright: Abhinaba Roy- <span style={{ color: '#FF0000' }}>All Rights Reserved.</span></Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

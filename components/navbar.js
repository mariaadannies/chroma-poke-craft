import {Navbar, Text} from '@nextui-org/react';
import React from 'react';

const Nav = () => {

   return (
      <Navbar
         isBordered
         css={{
            'overflow': 'hidden',
            '& .nextui-navbar-container': {
               background: '$background',
               borderBottom: 'none',
            },
         }}
      >
         <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
            <Text b color="inherit" hideIn="xs">
               PokemonCatcher
            </Text>
            <Navbar.Content
               hideIn="sm"
               css={{
                  pl: '6rem',
               }}
            >
               <Navbar.Link href="/">List Pokemon</Navbar.Link>
               <Navbar.Link href="/owned">Owned Pokemon</Navbar.Link>
            </Navbar.Content>
         </Navbar.Brand>
      </Navbar>
   );
};

export default Nav;
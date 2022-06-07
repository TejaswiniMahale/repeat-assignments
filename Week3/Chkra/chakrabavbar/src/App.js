
import { Box, Button, Collapse, Container, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react';
import './App.css';

function App() {
  
  return (
   <div className='main'>
   <div><h1 style={{font:"20px solid black"}}>Logo</h1></div>
   <div>
      
   <Menu>
  <MenuButton as={Button} >
    Inspiration
  </MenuButton>
  <MenuList>
    <MenuGroup title='Profile'>
      <MenuItem>My Account</MenuItem>
      <MenuItem>Payments </MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Help'>
      <MenuItem>Docs</MenuItem>
      <MenuItem>FAQ</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>
   </div>
   <div>
      
   <Menu>
  <MenuButton as={Button} >
    FindWork
  </MenuButton>
  <MenuList>
    <MenuGroup title='Profile'>
      <MenuItem>My Account</MenuItem>
      <MenuItem>Payments </MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Help'>
      <MenuItem>Docs</MenuItem>
      <MenuItem>FAQ</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>
   </div>
   <div>
   <Button >Learn Design</Button>
   </div>
   <div>
   <Button >Hire Designers</Button>
   </div>
   <div>
   <Button  variant='link'>Sign In</Button>
   </div>
   <div>
   <Button colorScheme='pink'>Sign Up</Button>
   </div>
   </div>
  );
}

export default App;

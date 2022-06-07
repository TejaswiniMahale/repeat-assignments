

import {  Button, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList } from '@chakra-ui/react';
import './App.css';
import { PhoneIcon} from '@chakra-ui/icons'
import { DragHandleIcon } from '@chakra-ui/icons';
import { BellIcon } from '@chakra-ui/icons';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { StarIcon } from '@chakra-ui/icons';
import { SettingsIcon } from '@chakra-ui/icons';

function App() {
  
  return (
   <div>
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
   <div style={{borderRight:"1px solid black",width:"250px",height:"700px",padding:"30px"}}>
   <h1 style={{font:"25px solid black",padding:"20px"}}>Logo</h1>
   <Button style={{width:"170px",marginBottom:"20px"}}><DragHandleIcon/>Home</Button>
   <br></br>
   <Button style={{width:"170px",marginBottom:"20px"}}><BellIcon/>Trending</Button>
   <br></br>
   <Button style={{width:"170px",marginBottom:"20px"}}><ExternalLinkIcon/>Explore</Button>
   <br></br>
   <Button style={{width:"170px",marginBottom:"20px"}}><StarIcon/>Fovorite</Button>
   <br></br>
   <Button style={{width:"170px",marginBottom:"20px"}}><SettingsIcon/>Setting</Button>
   <br></br>
   
   </div>
   </div>
  );
}

export default App;

import React, { useState } from 'react'
import { Menu, Input, Icon } from 'semantic-ui-react'

export function NavBar(props) {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (event, { name }) => setActiveItem(name);
  const handleToggle = () => props.handleToggle();
  
 return(
  <Menu color='blue' inverted attached='top'>
    <Menu.Menu position='left'>
      <Menu.Item
        name='Menu'
        onClick={handleToggle}
      >
        <Icon name='bars' />
      </Menu.Item>
      <Menu.Item
      >
        <img alt='How-to Logo' src='https://react.semantic-ui.com/logo.png' />
      </Menu.Item>
    </Menu.Menu>

    <Menu.Menu position='right'>
      <Menu.Item
        name='Home'
        active={activeItem === 'Home'}
        onClick={handleItemClick}
      >
        <Icon name='home' />
      </Menu.Item>
      <Menu.Item>
        <Input icon='search' placeholder='Search...' />
      </Menu.Item>

      <Menu.Item
        name='AllGuides'
        active={activeItem === 'AllGuides'}
        onClick={handleItemClick}
      >
        <Icon name='th' />
      </Menu.Item>
      <Menu.Item
        name='LikedGuides'
        active={activeItem === 'LikedGuides'}
        onClick={handleItemClick}
      >
        <Icon name='heart outline' />
      </Menu.Item>
      <Menu.Item
        name='AddGuide'
        active={activeItem === 'AddGuide'}
        onClick={handleItemClick}
      >
        <Icon name='add' />
      </Menu.Item>
    </Menu.Menu>
</Menu>
 );
}

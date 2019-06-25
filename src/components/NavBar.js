import React from 'react'
import { Menu, Input, Icon } from 'semantic-ui-react'

export function NavBar() {
 return(
  <Menu color='blue' inverted attached='top' pointing>
    <Menu.Menu position='left'>
      <Menu.Item
        name='Menu'
      >
        <Icon name='bars' />
      </Menu.Item>
      <Menu.Item
      >
        <img alt='How-to Logo' src='https://react.semantic-ui.com/logo.png' />
      </Menu.Item>
    </Menu.Menu>

    <Menu.Menu position='right'>

      <Menu.Item>
        <Input icon='search' placeholder='Search...' />
      </Menu.Item>

      <Menu.Item
        name='AllGuides'
      >
        <Icon name='th' />
      </Menu.Item>
      <Menu.Item
        name='LikedGuides'
      >
        <Icon name='heart outline' />
      </Menu.Item>
      <Menu.Item
        name='AddGuide'
      >
        <Icon name='add' />
      </Menu.Item>
    </Menu.Menu>
</Menu>
 );
}

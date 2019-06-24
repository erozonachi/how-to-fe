import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

export function NavBar() {
 return(
  <Menu attached='top' stackable>
    <Menu.Item
      name='Menu'
      position='left'
    >
      <Icon name='bars' />
    </Menu.Item>
    <Menu.Item
      position='left'
    >
      <img alt='How-to Logo' src='https://react.semantic-ui.com/logo.png' />
    </Menu.Item>
    <Menu.Menu
      position='right'
    >
      <div className='ui right aligned category search item'>
        <div className='ui transparent icon input'>
          <input className='prompt' type='text' placeholder='Search...' />
          <i className='search link icon' />
        </div>
        <div className='results' />
      </div>
    </Menu.Menu>
    <Menu.Item
      name='AllGuides'
      position='right'
    >
      <Icon name='th' />
    </Menu.Item>
    <Menu.Item
      name='LikedGuides'
      position='right'
    >
      <Icon name='heart outline' />
    </Menu.Item>
    <Menu.Item
      name='AddGuide'
      position='right'
    >
      <Icon name='add' />
    </Menu.Item>
</Menu>
 );
}

import React, { useState } from 'react';
import { Menu, Input, Icon, Responsive } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { openGuideForm } from '../actions';

function NavBar(props) {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (event, { name }) => setActiveItem(name);
  const handleToggle = () => props.handleToggle();
  const openGuideForm = () => props.openGuideForm();
  
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
      <Responsive 
        as={Menu.Item} 
        minWidth={Responsive.onlyTablet.minWidth}
        name='Home'
        active={activeItem === 'Home'}
        onClick={handleItemClick}
      >
          <Icon name='home' />
      </Responsive>
      <Menu.Item>
        <Input icon='search' placeholder='Search...' />
      </Menu.Item>

      <Responsive 
        as={Menu.Item} 
        minWidth={Responsive.onlyTablet.minWidth}
        name='AllGuides'
        active={activeItem === 'AllGuides'}
        onClick={handleItemClick}
      >
          <Icon name='th' />
        </Responsive>
        <Responsive 
          as={Menu.Item} 
          minWidth={Responsive.onlyTablet.minWidth}
          name='LikedGuides'
          active={activeItem === 'LikedGuides'}
          onClick={handleItemClick}
        >
          <Icon name='heart outline' />
        </Responsive>
        <Responsive 
          as={Menu.Item} 
          minWidth={Responsive.onlyTablet.minWidth}
          name='AddGuide'
          active={activeItem === 'AddGuide'}
          onClick={openGuideForm}
        >
          <Icon name='add' />
        </Responsive>
    </Menu.Menu>
</Menu>
 );
}

export default connect(() => ({}), { openGuideForm })(NavBar);

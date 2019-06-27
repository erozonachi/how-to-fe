import React, { useState } from 'react';
import { Menu, Input, Icon, Responsive } from 'semantic-ui-react';
import { NavLink, } from 'react-router-dom';
import { connect } from 'react-redux';
import { openGuideForm, searchGuide, } from '../actions';
import GuideForm from './guides/GuideForm';
import Fuse from 'fuse.js';
import { mapStateToProps } from './mapState';
import logo from './logo.png';

function NavBar(props) {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (event, { name }) => setActiveItem(name);
  const handleToggle = () => props.handleToggle();
  const openGuideForm = () => props.openGuideForm();
  const options = {
    tokenize: true,
    matchAllTokens: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
      "title",
      "type",
      "username",
    ]
  };
  const fuzzySearch = (event) => {
    const fuse = new Fuse(props.guidesData.guides, options);
    props.searchGuide(fuse.search(event.target.value.trim()));
  }
  
 return(
  <Menu color='blue' inverted attached='top'>
    <Menu.Menu position='left'>
      <Menu.Item
        name='Menu'
        onClick={handleToggle}
      >
        <Icon name='bars' />
      </Menu.Item>
      <Responsive 
          as={Menu.Item} 
          minWidth={Responsive.onlyTablet.minWidth}
        >
          <img alt='How-to Logo' src={logo} />
        </Responsive>
    </Menu.Menu>

    <Menu.Menu position='right'>
      <Responsive 
        as={Menu.Item} 
        minWidth={Responsive.onlyTablet.minWidth}
        name='Home'
        active={activeItem === 'Home'}
        onClick={handleItemClick}
      >
        <NavLink to='/'>
          <Icon name='home' />
        </NavLink>
      </Responsive>
      <Menu.Item>
        <Input onChange={fuzzySearch} name='search' icon='search' placeholder='Search...' />
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
        <GuideForm 
          trigger={
            <Responsive 
              as={Menu.Item} 
              minWidth={Responsive.onlyTablet.minWidth}
              name='AddGuide'
              active={activeItem === 'AddGuide'}
              onClick={openGuideForm}
            >
              <Icon name='add' />
            </Responsive>
          }
        />
    </Menu.Menu>
</Menu>
 );
}

export default connect(mapStateToProps, { openGuideForm, searchGuide, })(NavBar);

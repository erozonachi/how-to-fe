import React, { useState } from 'react'
import { Icon, Menu, Segment, Sidebar, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
import NavBar from './NavBar';
import GuideForm from './guides/GuideForm';
import { connect } from 'react-redux';
import { openGuideForm } from '../actions';
import { mapStateToProps } from './mapState';

function Dashboard(props) {
  const [ visible, setVisible ] = useState(false);
  const toggleSidebar = () => setVisible( prevState => !prevState);
  const openGuideForm = () => props.openGuideForm();

  return(
    <div>
      <NavBar handleToggle={toggleSidebar} />

      <Sidebar.Pushable as={Segment} style={{minHeight: '100vh', margin: '0 auto', width: '100%'}}>
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          color='blue'
          onHide={toggleSidebar}
          vertical
          visible={visible}
          width='thin'
        >
          <Menu.Item as='a'>
            <Icon name='user' />
            {`${props.auth.user.username + ' - ' + props.auth.user.type}`}
          </Menu.Item>
          <Menu.Item as={Link} to='/'>
            <Icon name='home' />
            Home
          </Menu.Item>
          <GuideForm 
            trigger={
              <Menu.Item as='a' onClick={openGuideForm}>
                <Icon name='add' />
                New Guide
              </Menu.Item>
            }
          />
          <Menu.Item as='a'>
            <Icon name='edit' />
            Your Guides
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='th' />
            All Guides
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='heart outline' />
            Liked Guides
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='eye' />
            Viewed Guides
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='wpexplorer' />
            Tried Guides
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='log out' />
            Log Out
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
          <Segment basic>
            {props.children}
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

export default connect(mapStateToProps, { openGuideForm })(Dashboard);

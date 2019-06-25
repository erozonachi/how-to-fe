import React, {} from 'react'
import { Header, Icon, Menu, Segment, Sidebar, Image } from 'semantic-ui-react';
import { NavBar } from './NavBar';

export function Dashboard() {
  return(
    <div>
      <NavBar />

      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={visible}
          width='thin'
        >
          <Menu.Item as='a'>
            <Icon name='user' />
            {'Eneh - Creator'}
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='home' />
            Home
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='add' />
            New Guide
          </Menu.Item>
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
            <Header as='h3'>Dashboard Content</Header>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

import React from 'react';
import { Icon, Image, Embed, Segment, Header, Divider, Container, } from 'semantic-ui-react';
import { ViewContainer, StepSection,  } from './StyledComponents';

export default function SingleGuideView(props) {
  <ViewContainer>
    <Segment>
      <Header as='h3'>
        <Icon name='eye' />
        <Header.Content>
          {props.guidesData.singleRead.title}
          <Header.Subheader>Type :- {` ${props.guidesData.singleRead.type}`}</Header.Subheader>
          <Header.Subheader>Author :- {` ${props.guidesData.singleRead.username}`}</Header.Subheader>
        </Header.Content>
      </Header>
      <Divider />
      {(props.guidesData.singleRead.link.toLowerCase().match(/\.jpg$/) ||
          props.guidesData.singleRead.link.toLowerCase().match(/\.jpeg$/) ||  
          props.guidesData.singleRead.link.toLowerCase().match(/\.png$/))?
          <Image alt={props.guidesData.singleRead.title} src={props.guidesData.singleRead.link} wrapped ui={false} /> :
          (props.guidesData.singleRead.link.toLowerCase().includes('youtube')? 
            <Embed
              icon='play circle'
              id={props.guidesData.singleRead.link.split('=')[1]}
              source='youtube'
            /> :
            <Embed
              icon='play circle'
              url={props.guidesData.singleRead.link}
            />)
      }
      <Segment raised>
        {props.guidesData.singleRead.description}
      </Segment>
      <Header as='h4'>Steps</Header>
      <Segment raised>
        <StepSection>
          <Icon as='button' name='chevron circle left' />
          <Container>{'Step 1'}</Container>
          <Icon as='button' name='chevron circle right' />
        </StepSection>
      </Segment>
    </Segment>
  </ViewContainer>
}

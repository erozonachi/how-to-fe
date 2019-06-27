import React, { useState } from 'react';
import { Icon, Image, Embed, Segment, Header, Divider, Container, Button, } from 'semantic-ui-react';
import { ViewContainer, StepSection,  } from './StyledComponents';
import { connect } from 'react-redux';
import { mapStateToProps } from '../mapState';

function SingleGuideView(props) {
  const [viewInfo, setViewInfo] = useState({stepCount: 1});
  const handleNext = () => {
    if(props.guidesData.singleRead['step_' + (viewInfo.stepCount + 1)]) {
      setViewInfo(prevState => ({stepCount: prevState.stepCount + 1}));
    }
  }
  const handlePrevious = () => {
    if(props.guidesData.singleRead['step_' + (viewInfo.stepCount - 1)]) {
      setViewInfo(prevState => ({stepCount: prevState.stepCount - 1}));
    }
  }

  return (
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
            <Button onClick={handlePrevious} basic >
            <Icon name='chevron left' />
            </Button>
            <Container>
              <p>{props.guidesData.singleRead['step_' + viewInfo.stepCount]}</p>
            </Container>
            <Button onClick={handleNext} basic>
            <Icon name='chevron right' />
            </Button>
          </StepSection>
        </Segment>
      </Segment>
    </ViewContainer>
  );
}

export default connect(mapStateToProps, {})(SingleGuideView);

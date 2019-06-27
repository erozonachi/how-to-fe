import React, { useState, } from 'react';
import { Card, Button, Icon, Image, Embed, Segment } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
import { CardContainer } from './StyledComponents';
import GuideForm from './GuideForm';
import { openGuideForm, openConfirm, readGuide, } from '../../actions';
import { connect } from 'react-redux';
import ConfirmDelete from './ConfirmDelete';

function GuideCard(props) {
  const popUpGuideForm = () => {
    props.openGuideForm(props.guide);
  };
  const popUpDelete = () => {
    props.openConfirm(props.guide.id);
  }
  const handleRead = () => {
    props.readGuide(props.guide);
  }
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(!hover);
  }

  return(
    <CardContainer onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <Card as={Segment} raised={hover}>
      {(props.guide.link.toLowerCase().match(/\.jpg$/) ||
          props.guide.link.toLowerCase().match(/\.jpeg$/) ||  
          props.guide.link.toLowerCase().match(/\.png$/))?
          <Image alt={props.guide.title} src={props.guide.link} wrapped ui={false} /> :
          (props.guide.link.toLowerCase().includes('youtube')? 
            <Embed
              icon='play circle'
              id={props.guide.link.split('=')[1]}
              source='youtube'
            /> :
            <Embed
              icon='play circle'
              url={props.guide.link}
            />)
      }
        <Card.Content>
          <Card.Header>{props.guide.title}</Card.Header>
          <Card.Meta>
            <span className='author'>by {props.guide.username.toUpperCase()}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div className={props.user === props.guide.username? 'ui four buttons' : 'ui two buttons'}>
            <Button onClick={handleRead} basic color='teal' as={Link} to={`/guides/${props.guide.id}`}>
              <Icon name='eye' />
            </Button>
            <Button basic color='orange'>
              <Icon name='like' />
            </Button>
            {(props.user === props.guide.username) && <GuideForm 
              guide={props.guide}
              trigger={
                <Button basic color='blue' onClick={popUpGuideForm}>
                  <Icon name='edit' />
                </Button>
              }
            />}
            {(props.user === props.guide.username) && <ConfirmDelete
              trigger={
                <Button basic color='red' onClick={popUpDelete}>
                  <Icon name='trash' />
                </Button>
              }
            />}
          </div>
        </Card.Content>
      </Card>
    </CardContainer>
  );
}

export default connect(() => ({}), { openGuideForm, openConfirm, readGuide, })(GuideCard);

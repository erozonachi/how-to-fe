import React from 'react';
import { Card, Button, Icon, Image, Embed } from 'semantic-ui-react';
import { CardContainer } from './StyledComponents';
import GuideForm from './GuideForm';

export default function GuideCard(props) {
  return(
    <CardContainer>
      <Card>
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
            <Button basic color='teal'>
              <Icon name='eye' />
            </Button>
            <Button basic color='orange'>
              <Icon name='like' />
            </Button>
            {(props.user === props.guide.username) && <GuideForm 
              trigger={
                <Button basic color='blue'>
                  <Icon name='edit' />
                </Button>
              }
              guide={props.guide}
            />}
            {(props.user === props.guide.username) && <Button basic color='red'>
              <Icon name='trash' />
            </Button>}
          </div>
        </Card.Content>
      </Card>
    </CardContainer>
  );
}

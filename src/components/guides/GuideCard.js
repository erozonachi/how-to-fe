import React from 'react';
import { Card, Button, Icon, Image } from 'semantic-ui-react';

export default function GuideCard(props) {
  return(
    <div>
      <Card>
      {(props.guide.link.toLowerCase().match(/\.jpg$/) ||
          props.guide.link.toLowerCase().match(/\.jpeg$/) ||  
          props.guide.link.toLowerCase().match(/\.png$/))?
          <Image alt={props.guide.title} src={props.guide.link} wrapped ui={false} /> :
          <Embed
            icon='play circle'
            url={props.guide.link}
          />
      }
        <Card.Content>
          <Card.Header>{props.guide.title}</Card.Header>
          <Card.Meta>
            <span className='author'>by {props.guide.username.toUpperCase()}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Edit
            </Button>
            <Button basic color='red'>
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}
import React, { useState } from 'react';
import { Button, Header, Icon, Modal, Form, Button, Divider, Transition, List, } from 'semantic-ui-react';

export function GuideForm() {
  const initialState = {
    title: '',
    type: '',
    description: '',
    link: '',
    steps: [],
  }
  const [guide, setGuide] = useState(initialState);

  return(
    <Modal closeIcon>
      <Header icon='add circle' content='Create How-to Guide' />
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Title</label>
            <input name='title' placeholder='Enter Title' />
          </Form.Field>
          <Form.Field>
            <label>Type</label>
            <input name='type' placeholder='Enter Type' />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <textarea name='description' placeholder='Enter Description' />
          </Form.Field>
          <Form.Field>
            <label>Steps</label>
            <Transition.Group as={List} animation='slide left' duration={500} divided size='huge'     verticalAlign='middle'>
              {guide.steps.map((item, index) => (
                <List.Item key={index}>
                  <List.Content floated='right'>
                    <Icon name='remove' />
                    <Icon name='edit' />
                  </List.Content>
                  <List.Content>{item}</List.Content>
                </List.Item>
              ))}
            </Transition.Group>
            <textarea name='step' placeholder='Enter a Step' />
            <Button type='button'><Icon name='add square' /></Button>
          </Form.Field>
          <Form.Field>
            <label>Image/Video Upload</label>
            <input name='upload' type='file' />
            <Divider horizontal>Or</Divider>
            <label>Image/Video URL</label>
            <input name='link' placeholder='Enter URL' />
          </Form.Field>
          <Button color='blue' style={{with:'100%'}} type='submit'>Submit</Button>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='blue'>
          <Icon name='remove' /> Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

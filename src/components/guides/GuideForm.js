import React, { useState } from 'react';
import { Button, Header, Icon, Modal, Form, Divider, Transition, List, } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../mapState';
import { closeGuideForm } from '../../actions';

function GuideForm(props) {
  const initialState = {
    title: '',
    type: '',
    description: '',
    link: '',
    step: '',
    steps: [],
  }
  const [guide, setGuide] = useState(initialState);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setGuide(prevGuide => ({...prevGuide, [name]: value}));
  };
  const handleAddClick = () => {
    if(guide.step.trim() !== '' && guide.steps.length < 5) {
      setGuide(prevGuide => ({...prevGuide, steps: [...prevGuide.steps, prevGuide.step]}));
    }
  }
  const handleRemoveClick = (index) => {
    setGuide(prevGuide => ({...prevGuide, steps: prevGuide.steps.filter((item, pos) => pos !== index)}));
  }
  const handleClose = () => props.closeGuideForm();

  return(
    <Modal
      trigger={props.trigger}
      open={props.guidesData.guideFormOpen}
      onClose={handleClose}
      closeIcon
    >
      <Header icon='add circle' content='Create How-to Guide' />
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Title</label>
            <input onChange={handleChange} name='title' placeholder='Enter Title' />
          </Form.Field>
          <Form.Field>
            <label>Type</label>
            <input onChange={handleChange} name='type' placeholder='Enter Type' />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <textarea onChange={handleChange} name='description' placeholder='Enter Description' />
          </Form.Field>
          <Form.Field>
            <label>Steps</label>
            <Transition.Group as={List} animation='slide left' duration={500} divided size='huge'     verticalAlign='middle'>
              {guide.steps.map((item, index) => (
                <List.Item key={index}>
                  <List.Content floated='right'>
                    <Icon onClick={() => handleRemoveClick(index)} name='remove' />
                  </List.Content>
                  <List.Content>{item}</List.Content>
                </List.Item>
              ))}
            </Transition.Group>
            <textarea onChange={handleChange} name='step' placeholder='Enter a Step' />
            <Button onClick={handleAddClick} style={{marginTop:'.5em'}} type='button'>
              <Icon name='add' />&nbsp;Add Step
            </Button>
          </Form.Field>
          <Form.Field>
            <label>Image/Video Upload</label>
            <input name='upload' type='file' />
            <Divider horizontal>Or</Divider>
            <label>Image/Video URL</label>
            <input onChange={handleChange} name='link' placeholder='Enter URL' />
          </Form.Field>
          <Button color='blue' style={{with:'100%'}} type='submit'>Submit</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
}

export default connect(mapStateToProps, { closeGuideForm })(GuideForm);

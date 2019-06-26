import React, { useState } from 'react';
import { Button, Header, Icon, Modal, Form, Divider, Transition, List, Message, } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../mapState';
import { closeGuideForm } from '../../actions';
import axios from 'axios';

function GuideForm(props) {
  const initialState = {
    title: '',
    type: '',
    description: '',
    link: '',
    step: '',
    steps: [],
  }
  const errorDefaults = {
    title: null,
    message: null,
  };
  const [guide, setGuide] = useState(initialState);
  const [formError, setFormError] = useState(errorDefaults);
  const fileUpload = React.createRef();

  const cloudUpload = (file) => {
    const cloudName = 'eneh';
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    const formData = new FormData();

    formData.append('upload_preset', 'politico-eneh');
    formData.append('tags', 'client_upload');
    formData.append('file', file);

    return axios.post(url, formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormError({...errorDefaults});

    if (guide.title.trim() !== '' && guide.type.trim() !== '' && guide.description.trim() !== '' && 
      guide.steps.length > 0 && (guide.link.trim() !== '' || fileUpload.files.length > 0)) {
        if (fileUpload.files && fileUpload.files[0].name.trim() !== '') {
          if (!fileUpload.files[0].name.toLowerCase().match(/\.jpg$/) && 
          !fileUpload.files[0].name.toLowerCase().match(/\.jpeg$/) &&  
          !fileUpload.files[0].name.toLowerCase().match(/\.png$/) && 
          !fileUpload.files[0].name.toLowerCase().match(/\.mp4$/)) {
            delete fileUpload.files;
            fileUpload.value = '';
            setFormError( (prevError) => ({
              ...prevError,
              title: 'File Upload',
              message: '.jpg, .png or mp4 extension required',
            }));
            return;
          }
        }
        console.log('files: ', fileUpload.files);
        console.log('Value: ', fileUpload.value);
    } else {
      setFormError( (prevError) => ({
        ...prevError,
        title: 'All Fields Required',
        message: 'Please fill in blank input fields',
      }));
    }
  }

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
        <Form onSubmit={handleSubmit} error>
          {formError.title && <Message
            error
            header={formError.title}
            content={formError.message}
          />}
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
            <input ref={fileUpload} name='upload' type='file' accept=".png,.jpeg,.jpg,.mp4,.MP4" />
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

import React, { Component } from 'react';
import { Button, Header, Icon, Modal, Form, Divider, Transition, List, Message, } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../mapState';
import { closeGuideForm } from '../../actions';
import axios from 'axios';

class GuideForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guide: {
        title: '',
        type: '',
        description: '',
        link: '',
        step: '',
        steps: [],
      },
      formError: {
        title: null,
        message: null,
      },
    }
  }
  fileUpload = React.createRef();

  cloudUpload = (file) => {
    const cloudName = 'eneh';
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    const formData = new FormData();

    formData.append('upload_preset', 'politico-eneh');
    formData.append('tags', 'client_upload');
    formData.append('file', file);

    return axios.post(url, formData);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const guide = this.state.guide;
    this.setState(prevState => ({...prevState, formError: {
      title: null,
      message: null,
      }
    }));

    if (guide.title.trim() !== '' && guide.type.trim() !== '' && guide.description.trim() !== '' && 
      guide.steps.length > 0 && (guide.link.trim() !== '' || this.fileUpload.current.files.length > 0)) {
        if (this.fileUpload.current.files && this.fileUpload.current.files[0].name.trim() !== '') {
          if (!this.fileUpload.current.files[0].name.toLowerCase().match(/\.jpg$/) && 
          !this.fileUpload.current.files[0].name.toLowerCase().match(/\.jpeg$/) &&  
          !this.fileUpload.current.files[0].name.toLowerCase().match(/\.png$/) && 
          !this.fileUpload.current.files[0].name.toLowerCase().match(/\.mp4$/)) {
            delete this.fileUpload.current.files;
            this.fileUpload.current.value = '';
            this.setState({
              formError: {
                title: 'File Upload',
                message: '.jpg, .png or mp4 extension required',
              },
            });
            return;
          }
        }
        console.log('files: ', this.fileUpload.current.files);
        console.log('Value: ', this.fileUpload.current.value);
    } else {
      this.setState({
        formError: {
          title: 'All Fields Required',
          message: 'Please fill in blank input fields',
        },
      });
    }
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(prevState => ({guide:{...prevState.guide, [name]: value}}));
  };
  handleAddClick = () => {
    if(this.state.guide.step.trim() !== '' && this.state.guide.steps.length < 5) {
      this.setState(prevState => ({guide:{...prevState.guide, steps: [...prevState.guide.steps, prevState.guide.step]}}));
    }
  }
  handleRemoveClick = (index) => {
    this.setState(prevState => ({guide:{...prevState.guide, steps: prevState.guide.steps.filter((item, pos) => pos !== index)}}));
  }
  handleClose = () => this.props.closeGuideForm();

  render() {
    return(
      <Modal
        trigger={this.props.trigger}
        open={this.props.guidesData.guideFormOpen}
        onClose={this.handleClose}
        closeIcon
      >
        <Header icon='add circle' content='Create How-to Guide' />
        <Modal.Content>
          <Form onSubmit={this.handleSubmit} error>
            {this.state.formError.title && <Message
              error
              header={this.state.formError.title}
              content={this.state.formError.message}
            />}
            <Form.Field>
              <label>Title</label>
              <input onChange={this.handleChange} name='title' placeholder='Enter Title' />
            </Form.Field>
            <Form.Field>
              <label>Type</label>
              <input onChange={this.handleChange} name='type' placeholder='Enter Type' />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <textarea onChange={this.handleChange} name='description' placeholder='Enter Description' />
            </Form.Field>
            <Form.Field>
              <label>Steps</label>
              <Transition.Group as={List} animation='slide left' duration={500} divided size='huge'     verticalAlign='middle'>
                {this.state.guide.steps.map((item, index) => (
                  <List.Item key={index}>
                    <List.Content floated='right'>
                      <Icon onClick={() => this.handleRemoveClick(index)} name='remove' />
                    </List.Content>
                    <List.Content>{item}</List.Content>
                  </List.Item>
                ))}
              </Transition.Group>
              <textarea onChange={this.handleChange} name='step' placeholder='Enter a Step' />
              <Button onClick={this.handleAddClick} style={{marginTop:'.5em'}} type='button'>
                <Icon name='add' />&nbsp;Add Step
              </Button>
            </Form.Field>
            <Form.Field>
              <label>Image/Video Upload</label>
              <input ref={this.fileUpload} name='upload' type='file' accept=".png,.jpeg,.jpg,.mp4,.MP4" />
              <Divider horizontal>Or</Divider>
              <label>Image/Video URL</label>
              <input onChange={this.handleChange} name='link' placeholder='Enter URL' />
            </Form.Field>
            <Button color='blue' style={{with:'100%'}} type='submit'>Submit</Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }

}

export default connect(mapStateToProps, { closeGuideForm })(GuideForm);

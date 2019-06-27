import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../mapState';
import { closeConfrim, deleteGuide, } from '../../actions';

function ConfirmDelete(props) {

  const handleClose = () => props.closeConfrim();
  const handleDelete = () => props.deleteGuide(props.guidesData.deleteID);

  return (
    <Modal size='mini' open={props.guidesData.confirmOpen} onClose={handleClose}>
      <Modal.Header>Delete How-to Guide</Modal.Header>
      <Modal.Content>
        <p>Are you sure you want to delete this guide</p>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleClose} negative>No</Button>
        <Button onClick={handleDelete} positive icon={props.guidesData.deletingGuide? 'spinner' : 'checkmark'} labelPosition='right' content='Yes' />
      </Modal.Actions>
    </Modal>
  );
}

export default connect(mapStateToProps, { closeConfrim, deleteGuide, })(ConfirmDelete);

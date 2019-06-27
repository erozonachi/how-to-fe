import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

export default function ConfirmDelete(props) {

  const handleClose = () => null;

  return (
    <Modal size='mini' open={props.guidesData.confirmOpen} onClose={handleClose}>
      <Modal.Header>Delete How-to Guide</Modal.Header>
      <Modal.Content>
        <p>Are you sure you want to delete this guide</p>
      </Modal.Content>
      <Modal.Actions>
        <Button negative>No</Button>
        <Button positive icon='checkmark' labelPosition='right' content='Yes' />
      </Modal.Actions>
    </Modal>
  );
}
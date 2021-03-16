import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { ContainerModal } from './styles';



export default function SimpleModal() {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <ContainerModal>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
     
    </ContainerModal>
  );

  return (
    <div>
      <Button 
        variant="contained" 
        color="primary" 
        type="button" 
        onClick={handleOpen}>
        Saiba mais
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
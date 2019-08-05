import React, { useState } from 'react'
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

const ModalActions = ({ handleClose }) => {
    return (
        <DialogActions>
            <Button onClick={handleClose} variant="contained" color="secondary">
                Close
             </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
                Close
             </Button>
        </DialogActions>
    )
}

export default ModalActions
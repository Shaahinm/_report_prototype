import React from "react";
import Options from './options';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    dialogTitle: {
        margin: 0,
        padding: theme.spacing(2),
        paddingLeft: theme.spacing(5),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
}))


const ModalTitle = ({ data, handleClose }) => {
    const classes = useStyles()
    return (
        <DialogTitle disableTypography className={classes.dialogTitle}>
            {
                <>
                    <Typography variant="h6">
                        Deal: {data.tranxSn}
                    </Typography>
                    <Options />
                </>
            }
        </DialogTitle>
    )
}

export default ModalTitle
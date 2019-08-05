import React, { useState } from 'react'
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@material-ui/icons/InfoRounded';
import DisplayRow from '../../rows/displayRow';
import ModalLinks from './modalLinks';


const useStyles = makeStyles(theme => ({
    info: {
        margin: 0,
        background: '#ebeff2',
        minHeight: 28,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(5),
    },
    infoText: {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(1),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    flex1: {
        display: 'flex',
        flex: 1
    },
    body: {
        paddingTop: theme.spacing(4)
    }
}))

const ModalBody = ({ data }) => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.info}>
                <InfoIcon color="disabled" />
                <Typography variant="subtitle1" className={classes.infoText}>
                    Some Info about this deal
                </Typography>
            </div>
            <DialogContent className={classes.body}>
                {
                    <>
                        <DisplayRow>
                            <Typography className={classes.flex1}>Busness Entity</Typography>
                            <Typography className={classes.flex1}>HQ</Typography>
                        </DisplayRow>
                        <DisplayRow>
                            <Typography className={classes.flex1}>Settlement Amount</Typography>
                            <Typography className={classes.flex1}>10,024,657.53</Typography>
                        </DisplayRow>
                        <DisplayRow>
                            <Typography className={classes.flex1}>Counterparty</Typography>
                            <Typography className={classes.flex1}>CIMB</Typography>
                        </DisplayRow>
                        <DisplayRow>
                            <Typography className={classes.flex1}>Instrument</Typography>
                            <Typography className={classes.flex1}>Placement</Typography>
                        </DisplayRow>
                        <DisplayRow>
                            <Typography className={classes.flex1}>Product</Typography>
                            <Typography className={classes.flex1}>Placement</Typography>
                        </DisplayRow>
                        <DisplayRow>
                            <Typography className={classes.flex1}>Principal</Typography>
                            <Typography className={classes.flex1}>10,000,000.00MYR</Typography>
                        </DisplayRow>
                        <DisplayRow>
                            <Typography className={classes.flex1}>Value Date</Typography>
                            <Typography className={classes.flex1}>13/07/2018</Typography>
                        </DisplayRow>
                        <DisplayRow>
                            <Typography className={classes.flex1}>Maturity Date</Typography>
                            <Typography className={classes.flex1}>31/07/2018</Typography>
                        </DisplayRow>
                        <DisplayRow>
                            <Typography className={classes.flex1}>Rate % P.A</Typography>
                            <Typography className={classes.flex1}>5.0000</Typography>
                        </DisplayRow>
                        <ModalLinks />
                    </>
                }
            </DialogContent>
        </>
    )
}

export default ModalBody
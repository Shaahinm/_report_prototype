import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CreditCardIcon from '@material-ui/icons/CreditCardOutlined';
import NoteAddIcon from '@material-ui/icons/NoteAddOutlined';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    // container: {
    //     marginLeft: theme.spacing(1)
    // }
}))

const ModalLinks = () => {
    const classes = useStyles()
    return (
        <List dense={true} className={classes.container}>
            <Divider variant="inset" component="li" />
            <ListItem button>
                <ListItemIcon>
                    <AccessTimeIcon />
                </ListItemIcon>
                <ListItemText primary="Payment Instruction (Default)"/>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem button>
                <ListItemIcon>
                    <CreditCardIcon />
                </ListItemIcon>
                <ListItemText primary="Transaction Schedule (Default)"/>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem button>
                <ListItemIcon>
                    <NoteAddIcon />
                </ListItemIcon>
                <ListItemText primary="Additional Info (Optional)"/>
            </ListItem>
        </List>
    )
}

export default ModalLinks
import React, { useContext } from 'react'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import { drawerWidth } from '../../styles/theme';


const useStyles = makeStyles(theme => ({
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar
    },
   
}))

export default function Sidebar({sidebarState, closeSidebar}) {
    
    const classes = useStyles()
    return (
        <Drawer
            classes={{
                paper: clsx(classes.drawerPaper, !sidebarState && classes.drawerPaperClose)
            }}
            open={sidebarState}
            onClose={closeSidebar}
        >
            <div className={classes.toolbarIcon}>
                <div style={{ width: '100%' }}>
                    <Typography variant="h3" style={{ textAlign: 'center' }}>Vega</Typography>
                </div>
                <IconButton onClick={closeSidebar}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            {/* <List>{mainListItems}</List> */}
            <Divider />
            {/* <List>{secondaryListItems}</List> */}
        </Drawer>
    )
}

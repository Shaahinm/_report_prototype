import React from 'react'
import ToolBar from './toolbar'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import clsx from 'clsx'
import { drawerWidth } from '../../styles/theme';



const useStyles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
}))

export default function Appbar({ sidebarState, openSidebar }) {    
    const classes = useStyles()
    
    return (
        <AppBar
            position='absolute'
            className={clsx(classes.appBar, sidebarState && classes.appBarShift)}
            color="default"
        >
            <ToolBar sidebarState={sidebarState} openSidebar={openSidebar}/>
        </AppBar>
    )
}

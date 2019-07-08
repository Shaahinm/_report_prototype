import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'



const useStyles = makeStyles(theme => ({
    toolbar: {
        paddingRight: 24
    },
    menuButton: {
        marginRight: 36
    },
    menuButtonHidden: {
        display: 'none'
    },
    title: {
        flexGrow: 1
    },
}))

export default function ToolBar({sidebarState, openSidebar}) {    
    const classes = useStyles()    
    return (
        <Toolbar className={classes.toolbar}>
            <IconButton
                edge='start'
                color='inherit'
                aria-label='Open drawer'
                onClick={openSidebar}
                className={clsx(
                    classes.menuButton,
                    sidebarState && classes.menuButtonHidden
                )}
            >
                <MenuIcon />
            </IconButton>
            <Typography
                component='h1'
                variant='h6'
                color='inherit'
                noWrap
                className={classes.title}
            >
                Reports
            </Typography>
            <IconButton color='inherit'>
                <Badge badgeContent={4} color='secondary'>
                    <NotificationsIcon />
                </Badge>
            </IconButton>
        </Toolbar>
    )
}

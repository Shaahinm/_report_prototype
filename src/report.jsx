import React, { useState, Suspense } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Appbar from './components/navbar/appbar';
import Sidebar from './components/sidebar/sidebar';
import Dashboard from './components/dashboard/dashboard';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    }
}))

function Report() {
    const classes = useStyles()
    const [sidebarState, setSidebarState] = useState(false)

    const closeSidebar = () => {
        setSidebarState(false)
    }

    const openSidebar = () => {
        setSidebarState(true)
    }


    return (

        <div className={classes.root}>
            <Appbar sidebarState={sidebarState} openSidebar={openSidebar} />
            <Sidebar sidebarState={sidebarState} closeSidebar={closeSidebar} />
            <Suspense fallback={<div>Loading...</div>}>
                <Dashboard />
            </Suspense>
        </div>
    )
}

export default Report

import React from 'react'
import blueGrey from '@material-ui/core/colors/blueGrey';


import { makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box';

const bg = blueGrey[50]

const useStyles = makeStyles(theme => ({
    filters: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        height: 64,
        width: '100%',
        background: bg
    }
}))

export default function Filters() {

    const classes = useStyles()
    return (
        <Box className={classes.filters}>
            Filters
        </Box>
    )
}

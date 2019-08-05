import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    row: {
        display: 'flex',
        paddingLeft: theme.spacing(5),
        marginBottom: theme.spacing(1)
    }
}))

const DisplayRow = (props) => {

    const classes = useStyles()

    return (
        <Box className={classes.row}>
            {props.children}
        </Box>
    )
}

export default DisplayRow

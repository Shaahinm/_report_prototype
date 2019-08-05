import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Filters from './widget/filters';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TradesTable from './tables/trades-table'
import { mockdata } from "../../data/mockData";
import { createUrlFor, GET_REPORTS } from '../../data/endpoints';

const useStyles = makeStyles(theme => ({
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto'
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column'
    },
    fixedHeight: {
        height: 240
    }
}))

const tableTypes = {
    TRADES: 'trades',
    POSITION: 'position',
    CASHFLOW: 'cashflow'
}

export default function Dashboard() {
    const classes = useStyles()
    // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
    const [data, setData] = useState([])
    const [tableType, setTableType] = useState(tableTypes.TRADES)

    useEffect(() => {
        // fetch(createUrlFor(GET_REPORTS))
        //     .then(response => response.json())
        //     .then(data => setData(data.data))        
        setData(mockdata.data.tradeDetails)              
    }, [])

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            {/* <Filters /> */}
            <Container maxWidth='xl' className={classes.container}>
                <Grid container spacing={3}>
                    {
                     tableType === tableTypes.TRADES 
                        ?    
                        <Grid item xs={12}>
                            <TradesTable data={data} />
                        </Grid>
                        : tableType === tableTypes.POSITION 
                        ? <span>Position</span> : <span>cashflow</span>
                    }                    
                </Grid>
            </Container>
            {/* <MadeWithLove /> */}
        </main>
    )
}

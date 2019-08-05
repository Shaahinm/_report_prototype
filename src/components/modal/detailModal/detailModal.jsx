import React, { useState, useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { mockdata } from '../../../data/mockData';
import ModalTitle from './modalTitle';
import ModalBody from './modalBody';
import ModalActions from './modalActions';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles(theme => ({
    progress: {
        margin: theme.spacing(2),
    },
    ProgressContainer: {
        display: 'flex',
        height: 128,
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})
const DetailModal = ({ open, handleClose, id }) => {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    useEffect(() => {
        // fetch(createUrlFor(GET_REPORTS_DETAIL))
        //     .then(response => response.json())
        //     .then(data => setData(data.data))        
        const timer = setTimeout(() => {
            setData(mockdata.data.tradeDetails.filter(t => t.tranxSn === id))            
            setIsLoading(false)
        }, 1500);

        return () => {
            clearInterval(timer)
        }

    }, [id])


    const localHandleClose = () => {
        handleClose()
        setData([])
        setIsLoading(true)
    }

    return (
        <Dialog
            open={open}
            onClose={localHandleClose}
            TransitionComponent={Transition}
            fullWidth={true}
            maxWidth={'sm'}
            scroll={'body'}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            {
                (!isLoading && data.length > 0)
                    ? (
                        <>
                            <ModalTitle data={data[0]} handleClose={localHandleClose} />
                            <ModalBody data={data[0]} isLoading={isLoading} />
                            <ModalActions handleClose={localHandleClose} />
                        </>
                    )
                    : (
                        <div className={classes.ProgressContainer}>
                            <CircularProgress className={classes.progress} />
                        </div>
                    )
            }
        </Dialog>
    )
}

export default DetailModal
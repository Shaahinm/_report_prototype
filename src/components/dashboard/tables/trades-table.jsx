import React, { useState } from 'react'
import MUIDataTable from "mui-datatables";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


export default function TradesTable({ data }) {
    const [selectedRowId, setSelectedRowId] = useState(0)
    const [open, setOpen] = useState(false);    

    function handleOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }
    const rowClicked = id => {
        setSelectedRowId(id)
        handleOpen()
    }
    const numberFormat = new Intl.NumberFormat("en-us", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })

    const columns = [
        {
            name: "tranxSn",
            options: {
                display: 'false',
                viewColumns: false,
                sort: false, 
                filter: false
            }
        },
        {
            name: "amount",
            label: "Amount",
            options: {
                filter: false,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    if (isNaN(value)) {
                        const [top, bottom] = value.split(',')
                        let valTop = numberFormat.format(+top)
                        let valBottom = numberFormat.format(+bottom)
                        return (<span>{valTop}<br />{valBottom}</span>)
                    }

                    return numberFormat.format(value)
                }
            }
        },
        {
            name: "counterparty",
            label: "Counterparty",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "currency",
            label: "Currency",
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    if (value.includes(',')) {
                        const [top, bottom] = value.split(',')
                        return (<span>{top}<br />{bottom}</span>)
                    }

                    return value
                }
            }
        },
        {
            name: "dealDate",
            label: "Date",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "dealStatus",
            label: "Status",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "instrument",
            label: "Instrument",
            options: {
                filter: true,
                sort: false,
            }
        },
    ];

    const options = {
        filter: true,
        filterType: 'dropdown',
        responsive: 'scroll',
        fixedHeader: true,
        rowsPerPage: 100,
        rowsPerPageOptions: [10, 50, 100],
        onRowClick: (rowData) => {
            rowClicked(rowData[0])
        },
        selectableRows: 'none'
    };

    return (
        <>
            <MUIDataTable
                title={"Trades Report"}
                data={data}
                columns={columns}
                options={options}
            />
            <Modal open={open} handleClose={handleClose} id={selectedRowId} />
        </>
    )
}

const Modal = ({ open, handleClose, id }) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending anonymous location data to
                    Google, even when no apps are running. {id}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Disagree
                 </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Agree
                 </Button>
            </DialogActions>
        </Dialog>
    )
}

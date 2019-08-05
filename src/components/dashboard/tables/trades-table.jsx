import React, { useState, Suspense } from 'react'
import MUIDataTable from "mui-datatables";
// import { DetailModal } from '../../modal/detailModal/detailModal';
const DetailModal = React.lazy(() => import('../../modal/detailModal/detailModal'));


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
            <Suspense fallback={<div>Loading</div>}>
                <DetailModal open={open} handleClose={handleClose} id={selectedRowId} />
            </Suspense>
        </>
    )
}

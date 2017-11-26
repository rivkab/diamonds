import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import './DataTable.css';

export default function DataTable(props) {
    return (
        <div className="DataTable">
            <ReactTable
                data={props.data}
                columns={[
                    {
                        Header: "Shape",
                        accessor: "shape"
                    },
                    {
                        Header: "Size",
                        accessor: "size"
                    },
                    {
                        Header: "Color",
                        accessor: "color"
                    },
                    {
                        Header: "Clarity",
                        accessor: "clarity"
                    },
                    {
                        Header: "Price",
                        accessor: "price"
                    },
                    {
                        Header: "List price",
                        accessor: "listPrice"
                    },
                ]}
                defaultPageSize={10}
            />
        </div>
    );
}
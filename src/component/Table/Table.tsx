import React from "react";
import './Table.module.css'
import IData from "../../interface/IData";
import IFilter from "../../interface/IFilter";
import ISort from "../../interface/ISort";
import TableContent from "../TableContent";


interface IProps {
    data: IData[];
    filters: IFilter[];
    sorts: ISort[];
}


const Table: React.FC<IProps> = ({data, filters, sorts}: IProps) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Store ID</th>
                <th>Date</th>
                <th>Weekly Sales</th>
                <th>Is holiday</th>
                <th>Temperature</th>
                <th>Fuel price</th>
                <th>CPI</th>
                <th>Unemployment</th>
            </tr>
            </thead>
            <TableContent data={data}
                          filters={filters}
                          sorts={sorts}/>
        </table>
    )
}

export default Table

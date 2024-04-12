import React from "react";
import './TableRow.module.css'
import IData from "../../interface/IData";


interface IProps {
    data: IData;
}

const TableRow: React.FC<IProps> = ({data}: IProps) => {
    return (
        <>
            <td>{data.store}</td>
            <td>{data.date}</td>
            <td>{data.weeklySales}</td>
            <td>{data.holiday.toString()}</td>
            <td>{data.temperature}</td>
            <td>{data.fuelPrice}</td>
            <td>{data.cpi}</td>
            <td>{data.unemployment}</td>
        </>
    )
}

export default TableRow

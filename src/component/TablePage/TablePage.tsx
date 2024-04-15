import React, {useState} from "react";
import IFilter from "../../interface/IFilter";
import ISort from "../../interface/ISort";
import SortOption from "../../enum/SortOption";
import IData from "../../interface/IData";
import TableParameters from "../TableParameters";
import Table from "../Table";
import * as d3 from "d3";

interface IProps {
    data: IData[];
}

const TablePage: React.FC<IProps> = ({data}: IProps) => {
    const extractValues = (data: IData[], fieldName: keyof IData) => {
        const keys = Array.from(d3.group(data, row => row[fieldName]).keys())
            .map(key => key.toString())
        return d3.sort(keys)
    }

    const [filters, setFilters] = useState<IFilter[]>([
        {label: 'Store ID', fieldName: 'store', values: extractValues(data, 'store'), selectedValues: []},
        {label: 'Date', fieldName: 'date', values: extractValues(data, 'date'), selectedValues: []},
        {label: 'Holiday', fieldName: 'holiday', values: extractValues(data, 'holiday'), selectedValues: []}
    ])
    const [sorts, setSorts] = useState<ISort[]>([
        {label: 'weekly sales', fieldName: 'weeklySales', option: SortOption.DISABLED},
        {label: 'fuel price', fieldName: 'fuelPrice', option: SortOption.DISABLED},
        {label: 'CPI', fieldName: 'cpi', option: SortOption.DISABLED},
        {label: 'unemployment', fieldName: 'unemployment', option: SortOption.DISABLED},
    ])

    return (
        <>
            <TableParameters filters={filters}
                             setFilters={setFilters}
                             sorts={sorts}
                             setSorts={setSorts}/>
            <Table data={data}
                   filters={filters}
                   sorts={sorts}/>
        </>
    )
}

export default TablePage
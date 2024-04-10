import React, {useEffect, useState} from 'react';
import * as d3 from "d3";
import './App.css';
import IData from "./interface/IData";
import IFilter from "./interface/IFilter";
import ISort from "./interface/ISort";
import SortOption from "./enum/SortOption";
import Parameters from "./component/Parameters";

const App: React.FC = () => {
    const [data, setData] = useState<IData[]>([])
    const [filters, setFilters] = useState<IFilter[]>([
        {label: 'Store ID', fieldName: 'store', values: [], selectedValues: []},
        {label: 'Date', fieldName: 'date', values: [], selectedValues: []},
        {label: 'Holiday', fieldName: 'holiday', values: [], selectedValues: []}
    ])
    const [sorts, setSorts] = useState<ISort[]>([
        {label: 'weekly sales', fieldName: 'weeklySales', option: SortOption.DISABLED},
        {label: 'fuel price', fieldName: 'fuelPrice', option: SortOption.DISABLED},
        {label: 'CPI', fieldName: 'cpi', option: SortOption.DISABLED},
        {label: 'unemployment', fieldName: 'unemployment', option: SortOption.DISABLED},
    ])

    useEffect(() => {
        d3.csv<IData>('/sales.csv', row => ({
            store: +row.Store,
            date: row.Date,
            weeklySales: +row.Weekly_Sales,
            holiday: !!+row.Holiday_Flag,
            temperature: +row.Temperature,
            fuelPrice: +row.Fuel_Price,
            cpi: +row.CPI,
            unemployment: +row.Unemployment
        }))
            .then(data => {
                setData(data)
                setFilters(filters => filters.map(filter => {
                    const keys = Array.from(d3.group(data, row => row[filter.fieldName]).keys())
                        .map(key => key.toString())
                    return {...filter, values: d3.sort(keys)}
                }))
            })
    }, [])

    return (
        <div className="App">
            <Parameters filters={filters}
                        setFilters={setFilters}
                        sorts={sorts}
                        setSorts={setSorts}/>
        </div>
    )
}

export default App

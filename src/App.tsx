import React, {useEffect, useState} from 'react';
import './App.css';
import Parameters from "./component/Parameters";
import IData from "./interface/IData";
import * as d3 from "d3";
import IFilter from "./interface/IFilter";
import ISort from "./interface/ISort";

const App: React.FC = () => {
    const [data, setData] = useState<IData[]>([])
    const [filters, setFilters] = useState<IFilter[]>([])
    const [sorts, setSorts] = useState<ISort[]>([])

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
            .then(setData)
    }, [])

    return (
        <div className="App">
            <Parameters data={data}
                        filters={filters}
                        setFilters={setFilters}
                        sorts={sorts}
                        setSorts={setSorts}/>
        </div>
    )
}

export default App

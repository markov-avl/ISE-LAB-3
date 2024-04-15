import React, {useEffect, useState} from 'react';
import * as d3 from "d3";
import './App.css';
import IData from './interface/IData';
import PageOption from "./enum/PageOption";
import PageSelector from "./component/PageSelector";
import TablePage from "./component/TablePage";
import DiagramPage from "./component/DiagramPage";

const App: React.FC = () => {
    const [pageOption, setPageOption] = React.useState<PageOption>(PageOption.TABLE)
    const [data, setData] = useState<IData[]>([])

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
            <PageSelector pageOption={pageOption}
                          setPageOption={setPageOption}/>
            {
                pageOption === PageOption.TABLE
                    ? <TablePage data={data}/>
                    : <DiagramPage data={data}/>
            }
        </div>
    )
}

export default App

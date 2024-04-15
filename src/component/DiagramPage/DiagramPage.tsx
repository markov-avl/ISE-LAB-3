import React, {useState} from "react";
import IData from "../../interface/IData";
import Diagram from "../Diagram";
import DiagramGroupBy from "../../enum/DiagramGroupBy";
import DiagramDataType from "../../enum/DiagramDataType";
import DiagramAggregator from "../../enum/DiagramAggregator";
import DiagramParameters from "../DiagramParameters";

interface IProps {
    data: IData[];
}

const DiagramPage: React.FC<IProps> = ({data}: IProps) => {
    const [groupBy, setGroupBy] = useState<DiagramGroupBy>(DiagramGroupBy.WEEK)
    const [dataType, setDataType] = useState<DiagramDataType>(DiagramDataType.WEEKLY_SALES)
    const [aggregator, setAggregator] = useState<DiagramAggregator>(DiagramAggregator.MIN)

    return (
        <>
            <Diagram data={data}
                     groupBy={groupBy}
                     dataType={dataType}
                     aggregator={aggregator}/>
            <DiagramParameters groupBy={groupBy}
                               setGroupBy={setGroupBy}
                               dataType={dataType}
                               setDataType={setDataType}
                               aggregator={aggregator}
                               setAggregator={setAggregator}/>
        </>
    )
}

export default DiagramPage
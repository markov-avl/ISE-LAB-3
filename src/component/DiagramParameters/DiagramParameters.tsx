import React from "react";
import DiagramGroupBy from "../../enum/DiagramGroupBy";
import DiagramDataType from "../../enum/DiagramDataType";
import DiagramAggregator from "../../enum/DiagramAggregator";
import styles from "./DiagramParameters.module.css";


interface IProps {
    groupBy: DiagramGroupBy;
    setGroupBy: (groupBy: DiagramGroupBy) => void;
    dataType: DiagramDataType;
    setDataType: (dataType: DiagramDataType) => void;
    aggregator: DiagramAggregator;
    setAggregator: (aggregator: DiagramAggregator) => void;
}


const DiagramParameters: React.FC<IProps> = ({
                                                 groupBy,
                                                 setGroupBy,
                                                 dataType,
                                                 setDataType,
                                                 aggregator,
                                                 setAggregator
                                             }: IProps) => {
    return (
        <div className={styles.parameterization}>
            <div>
                <label>Group by:</label>
                <br/>
                {
                    Object.values(DiagramGroupBy).map(value => <>
                        <input type="radio"
                               name={`groupBy-${value}`}
                               value={value}
                               onClick={() => setGroupBy(value)}
                               checked={groupBy === value}/>
                        <label htmlFor={`groupBy-${value}`}>
                            {value}
                        </label>
                        <br/>
                    </>)
                }
            </div>
            <div>
                <label>Data type:</label>
                <br/>
                {
                    Object.values(DiagramDataType).map(value => <>
                        <input type="radio"
                               name={`dataType-${value}`}
                               value={value}
                               onClick={() => setDataType(value)}
                               checked={dataType === value}/>
                        <label htmlFor={`dataType-${value}`}>
                            {value}
                        </label>
                        <br/>
                    </>)
                }
            </div>
            <div>
                <label>Aggregation:</label>
                <br/>
                {
                    Object.values(DiagramAggregator).map(value => <>
                        <input type="radio"
                               name={`aggregator-${value}`}
                               value={value}
                               onClick={() => setAggregator(value)}
                               checked={aggregator === value}/>
                        <label htmlFor={`aggregator-${value}`}>
                            {value}
                        </label>
                        <br/>
                    </>)
                }
            </div>
        </div>
    )
}

export default DiagramParameters

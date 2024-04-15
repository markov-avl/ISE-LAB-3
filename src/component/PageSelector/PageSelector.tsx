import React from "react";
import styles from "./PageSelector.module.css"
import PageOption from "../../enum/PageOption";

interface IProps {
    pageOption: PageOption;
    setPageOption: (pageOption: PageOption) => void;
}

const PageSelector: React.FC<IProps> = ({pageOption, setPageOption}: IProps) => {
    return (
        <div className={styles.filtering}>
            <input type='radio'
                   name={`pageOption-${PageOption.TABLE}`}
                   value={PageOption.TABLE}
                   checked={pageOption === PageOption.TABLE}
                   onClick={() => setPageOption(PageOption.TABLE)}/>
            <label htmlFor={`pageOption-${PageOption.TABLE}`}>{PageOption.TABLE}</label>
            <input type='radio'
                   name={`pageOption-${PageOption.DIAGRAM}`}
                   value={PageOption.DIAGRAM}
                   checked={pageOption === PageOption.DIAGRAM}
                   onClick={() => setPageOption(PageOption.DIAGRAM)}/>
            <label htmlFor={`pageOption-${PageOption.DIAGRAM}`}>{PageOption.DIAGRAM}</label>
        </div>
    )
}

export default PageSelector
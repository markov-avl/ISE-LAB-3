import React from "react";
import styles from './ClearButton.module.css'


interface IProps {
    label: string;
    onClick: () => void;
}


const ClearButton: React.FC<IProps> = ({label, onClick}: IProps) => {
    return (
        <div className={styles.clearButton}>
            <button onClick={onClick}
                    type={'reset'}>
                {label}
            </button>
        </div>
    )
}

export default ClearButton

import SortState from "../enum/SortState";
import IData from "./IData";

interface ISortSelector {
    label: string;
    fieldName: keyof IData;
    state: SortState;
}

export default ISortSelector

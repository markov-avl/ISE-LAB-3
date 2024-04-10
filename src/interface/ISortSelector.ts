import SortOption from "../enum/SortOption";
import IData from "./IData";

interface ISortSelector {
    label: string;
    fieldName: keyof IData;
    option: SortOption;
}

export default ISortSelector

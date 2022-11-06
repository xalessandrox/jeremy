import { Row } from "./Row";

export interface Column {
  columnDef: string;
  header: string;
  cell: Function;
  isLink?: boolean;
  routerLink?: Function;
  isSortable?: boolean;
  rowCustom?: Row; // this property was added to allow hover on whole row
}

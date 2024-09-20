import { Column } from "react-table";

export interface DailyTowingTable {
  id: number;
  amount: number;
  paymentmode: string;
  commission: number;
  toll: string;
  date: string;
}

export const COLUMNS: Column<DailyTowingTable>[] = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Location",
    accessor: "location",
  },
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Commission",
    accessor: "commission",
  },
  {
    Header: "Toll",
    accessor: "toll",
  },
  {
    Header: "Payment Mode",
    accessor: "paymentmode",
  },
];

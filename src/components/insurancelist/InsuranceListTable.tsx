import { useEffect, useMemo, useState } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import { COLUMNS } from "./Columns";
import "@/table.css";
import GlobalFiltering from "@/GlobalFiltering";
import { NoDataGif, spinner } from "@/utils";
import ColumnFiltering from "@/ColumnFiltering";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import {
  RxChevronLeft,
  RxChevronRight,
  RxDoubleArrowLeft,
  RxDoubleArrowRight,
  RxMixerHorizontal,
} from "react-icons/rx";
import { exportToExcel } from "@/lib/xlsx";
import { FaFileExcel } from "react-icons/fa6";
import Checkbox from "@/components/Checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { BASE_URL } from "@/components/Constants";
import ButtonSpinner from "../ui/ButtonSpinner";
// import { dailytowingData } from "@/dummydata/dailytowingData";
import { useSelector } from "react-redux";

const InsuranceListTable = () => {
  const isDarkMode = useSelector((state) => state.global.isDarkMode);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.ag-grid.com/example-assets/space-mission-data.json"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setData(data);
      // console.log(data.InformationList.Information[0].Title)
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns: any = useMemo(() => COLUMNS, []);
  // const data = useMemo(() => dailytowingData, [dailytowingData]);

  const defaultColumn: any = useMemo(() => {
    return {
      Filter: ColumnFiltering,
    };
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    nextPage,
    visibleColumns,
    rows,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setGlobalFilter,
    allColumns,
    getToggleHideAllColumnsProps,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageIndex: 0 } as any,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  ) as any;

  const { globalFilter } = state;

  const { pageIndex } = state;

  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden shadow mb-3">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight  text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  p-5 overflow-hidden ">
          Client Name
        </h2>
        <form onSubmit={() => {}} className="p-3 grid w-full gap-4">
          <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cold-1 gap-2">
            <div className="flex flex-col items-start space-y-2">
              <Label htmlFor="clientname">
                Add Client Name :<span className="text-red-500"> *</span>{" "}
              </Label>
              <Input type="text" id="issuedate" placeholder="John" />

              <div className="flex flex-col items-start justify-end space-y-2">
                <Button>Add</Button>
                {/* <Button disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <p className="mr-2">Adding...</p>
                      <ButtonSpinner />
                    </>
                  ) : (
                    <p>Add</p>
                  )}
                </Button> */}
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="bg-white md:p-4 p-2 rounded-md shadow-lg mb-4">
        <div className="space-y-3 sm:space-y-0 sm:flex justify-between items-center">
          <div>
            <h2 className="text-base sm:text-xl font-semibold tracking-tight">
              Client Name List{" "}
            </h2>
            <p className="text-xs text-muted-foreground">
              Here&apos;s a list of Client Name.
            </p>
          </div>

          <div className="sm:flex justify-between items-center gap-2">
            <FaFileExcel
              className="hidden sm:block text-[1.5rem] text-[#00b400] cursor-pointer  transition duration-75 ease-in hover:text-[#4bbd4b]"
              onClick={() =>
                exportToExcel(
                  visibleColumns.map((a: any) => {
                    return { label: a.Header, value: a.id };
                  }),
                  rows.map((row: any) => row.original),
                  "dataSheets"
                )
              }
            />

            <div className="hidden lg:block">
              <Popover>
                <PopoverTrigger>
                  <Button
                    variant="outline"
                    size="sm"
                    className="ml-auto hidden h-8 lg:flex"
                  >
                    <RxMixerHorizontal className="mr-2 h-4 w-4" />
                    View
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="bg-white py-2 px-3 text-[0.8rem] shadow-lg rounded-md">
                  <div className=" bg-gray-50 font-semibold py-1 flex items-center gap-2">
                    <Checkbox {...getToggleHideAllColumnsProps()} />
                    Toggle All
                  </div>
                  <hr className="mb-2" />
                  <div className="max-h-[40vh] overflow-auto">
                    {allColumns.map((column: any) => (
                      <div key={column.id}>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            {...column.getToggleHiddenProps()}
                          />{" "}
                          {column.Header}
                        </label>
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex items-center justify-between">
              <GlobalFiltering
                filter={globalFilter}
                setFilter={setGlobalFilter}
              />

              <FaFileExcel
                className="sm:hidden text-[1.5rem] text-[#00b400] cursor-pointer  transition duration-75 ease-in hover:text-[#4bbd4b]"
                onClick={() =>
                  exportToExcel(
                    visibleColumns.map((a: any) => {
                      return { label: a.Header, value: a.id };
                    }),
                    rows.map((row: any) => row.original),
                    "dataSheet"
                  )
                }
              />
            </div>
          </div>
        </div>

        {/* ------------------------------------Table-------------------------------------- */}
        <div className="overflow-auto">
          {/* {loading ? (
            <div className="w-full flex items-center justify-center h-[65vh]">
              <img src={spinner} className="w-[5rem]" alt="Loading..." />
            </div>
          ) : ( */}
          <table
            {...getTableProps()}
            className={isDarkMode ? "table-dark" : "table-light"}
          >
            <thead>
              {headerGroups.map((headerGroup: any) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column: any) => (
                    <th
                      className="whitespace-nowrap"
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      <div className="flex flex-row items-center justify-between">
                        <div>
                          {column.render("Header")}{" "}
                          <span>
                            {column.isSorted
                              ? column.isSortedDesc
                                ? "⬇️"
                                : "⬆️"
                              : ""}
                          </span>
                        </div>
                        {column.canFilter ? column.render("Filter") : null}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.length === 0 ? (
                <tr>
                  <td colSpan={columns.length}>
                    <span className="flex items-center justify-center">
                      <img
                        src={NoDataGif}
                        alt="No Data"
                        className="w-[10rem]"
                      />
                      No data available.
                    </span>
                  </td>
                </tr>
              ) : (
                page.map((row: any) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell: any) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
          {/* )} */}
        </div>

        {/*-------------------------------Pagination--------------------------- */}
        <div className="text-sm sm:text-base sm:flex justify-between items-center my-2">
          <div className="text-sm sm:text-base flex justify-between items-center gap-5">
            <span className="text-sm text-muted-foreground">
              Page{` `}
              <strong className="text-sm text-black">
                {pageIndex + 1} - {pageOptions.length}
              </strong>
              {` `}
              of <strong className="text-sm text-black">
                {rows.length}
              </strong>{" "}
              data
            </span>
            <span>
              Go to page: {` `}
              <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const pageNumber = e.target.value
                    ? Number(e.target.value) - 1
                    : 0;
                  gotoPage(pageNumber);
                }}
                className={`w-[50px] border-gray-400 border-[1px] border-solid rounded-sm p-[0.1rem_0.3rem] text-[0.8rem] ${
                  isDarkMode ? "text-white bg-gray-700" : ""
                }`}
              />
            </span>
          </div>
          <div className="flex justify-around my-3 sm:block sm:m-0">
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              <RxDoubleArrowLeft />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              <RxChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              <RxChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              <RxDoubleArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsuranceListTable;

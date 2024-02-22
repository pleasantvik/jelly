/* eslint-disable @typescript-eslint/no-explicit-any */

import TableHead from "./TableHead";
import { TableProps } from "./newTable.types";
import { useState } from "react";
import {
  Paper,
  Table,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import AppTabEmptyState from "./EmptyTableState";
import { statusColor } from "@/helpers/statusColor";
import ListShimmer from "@/components/ListShimmer/ListShimmer";

const CustomTable = ({
  moreMenu,
  results,
  tableHeads,
  // showPagination,
  onClick,
  isLoading,
  isError,
  emptyIconMessage,
  emptyIconTitle,
  EmptyIcon,
  handleMenu,
}: TableProps) => {
  const [currentPage] = useState(1);

  // const handlePageChange = (page: number) => {
  //   setCurrentPage(page);
  // };
  // const dataLength = results?.length as number;
  const isSuccessfullyLoaded = !isLoading && !isError;
  const dataNotEmpty = !!results && results.length > 0;
  const isDataUndefined = results?.length === undefined;

  const itemsPerPage = 20; // Number of items to display per page

  // Calculate the indexes for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentEntries = results?.slice(startIndex, endIndex);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <div>
        <TableContainer>
          <Table
            stickyHeader
            arial-aria-label="stick table"
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TableHead>
              <TableRow>
                {tableHeads?.map((column) => (
                  <TableCell
                    // style={{ minWidth: column.minWidth }}
                    key={column.label}
                  >
                    {column.label}
                  </TableCell>
                ))}

                {moreMenu && (
                  <TableCell
                    sx={{
                      // background: "#E4E8E2",
                      borderBottom: "border: 2px solid #E7E7ED",
                    }}
                  />
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {currentEntries?.map((rowData, idx) => {
                return (
                  <TableRow key={idx} onClick={() => onClick?.(rowData)}>
                    {tableHeads?.map(({ accessor }) => {
                      const dataToshow = rowData[accessor] || "---";
                      return (
                        <TableCell
                          key={accessor}
                          // className="py-5 text-lg xl:w-[400px]"
                          // classNameTableBodyCell={classNameTableBodyCell}
                        >
                          <span
                            className={statusColor(dataToshow)}
                            onClick={() => onClick?.(rowData)}
                          >
                            {dataToshow}
                          </span>
                        </TableCell>
                      );
                    })}
                    {moreMenu && (
                      <TableCell
                        sx={{
                          "&.MuiTableCell-root": {
                            padding: 0,
                          },
                        }}
                      >
                        <IconButton
                          onClick={(event: any) => handleMenu?.(event, rowData)}
                        >
                          {/* <MoreVert /> */}
                          {/* <img src={Imgs.menuDot} alt="menu dot" /> */}
                        </IconButton>
                      </TableCell>
                    )}
                  </TableRow>
                );
              })}
            </TableBody>
            {isLoading && (
              <TableRow sx={{ "& td": { border: 0 } }}>
                <TableCell align="center" colSpan={7} rowSpan={7}>
                  <ListShimmer length={itemsPerPage} />
                </TableCell>
              </TableRow>
            )}
            {!isDataUndefined && !dataNotEmpty && isSuccessfullyLoaded && (
              <AppTabEmptyState
                title={emptyIconTitle}
                message={emptyIconMessage}
                Illustration={EmptyIcon}
              />
            )}
          </Table>
        </TableContainer>

        {/* {showPagination && (
          <div className=" flex items-end justify-center">
            <CustomPagination
              endIndex={endIndex}
              startIndex={startIndex}
              currentPage={currentPage}
              onChangeOfPage={handlePageChange}
              lengthOfData={dataLength}
            />
          </div>
        )} */}
      </div>
    </Paper>
  );
};

export default CustomTable;

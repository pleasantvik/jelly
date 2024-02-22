/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';
export type ITableBody = {
  [x: string]: string | number | string[] | number[] | boolean | any;
};
export interface TableProps {
  tableHeads?: {
    label: string;
    accessor: string;
  }[];
  results?: ITableBody[];
  page: number;
  handleChangePage: (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    _page: number,
  ) => void;
  handleChangeRowsPerPage?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  rowsPerPage?: number;
  onClick?: (_data: ITableBody) => void;
  image?: string;
  EmptyIcon?: ReactNode;
  emptyIconTitle?: string;
  emptyIconMessage?: string;
  isLoading: boolean;
  isError?: boolean;
  status?: 'loading' | 'success' | 'error' | 'idle';
  moreMenu?: boolean;
  handleMenu?: (_e: Event, _data: ITableBody) => void;
  total?: number;
  showPagination?: boolean;
  classNameTableBodyCell?: string;
}

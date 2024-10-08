/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
16/06/2023            SawYN     1.0.0           - Create Table component
29/06/2023            SawYN     1.0.1           - Improve table functionalities (add in sort, checked list)
04/07/2023            SawYN     1.0.2           - Improve table functionality (change position)
24/07/2023            ChanYM    1.0.3           - Add in Drag and drop function
25/07/2023            Steven    1.0.4           - Add in onClickRow and rowSelected props for TaskAssign component

*/
/** @jsxImportSource @emotion/react */
import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Container,
  Table as BSTable,
  NavDropdown,
} from "react-bootstrap";
import Text from "./Text";
import {
  ArrowClockwise,
  PencilSquare,
  SortAlphaDown,
  SortAlphaUpAlt,
  Trash3,
} from "react-bootstrap-icons";
import { ViewTransaction } from "./Images";
import Checkbox from "./Checkbox";
import TableCss from "styles/components/TableCss";
//import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export interface TableProps {
  columns: Array<TableColumn>;
  data: any;
  dropdownOptions?: boolean;
  checkedList?: any;
  setCheckedList?: Dispatch<SetStateAction<Object>>;
  className?: string;
  sort?: any;
  setSort?: Dispatch<SetStateAction<any>>;
  sortCol?: Array<string>;
  setSortCol?: Dispatch<SetStateAction<string[]>>;
  onViewClick?: (data) => void;
  onEditClick?: (data) => void;
  onDeleteClick?: (data) => void;
  draggable?: boolean;
  onRowClick?: (index: number) => void;
  selectedRowIndex?: number;
}

interface TableColumn {
  key: string;
  label: string | JSX.Element;
}

const Table = ({
  columns,
  data,
  dropdownOptions = false,
  checkedList,
  setCheckedList,
  className,
  sort,
  setSort,
  sortCol, //which column being sorting
  setSortCol,
  onViewClick,
  onEditClick,
  onDeleteClick,
  draggable = true,
  onRowClick,
  selectedRowIndex,
}: TableProps) => {
  const [columnOrder, setColumnOrder] = useState(
    columns.map((column) => column.key)
  );

  const handleColumnDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;
    const newColumnOrder = [...columnOrder];

    const movedColumn = newColumnOrder.splice(source.index, 1);
    newColumnOrder.splice(destination.index, 0, movedColumn[0]);

    setColumnOrder(newColumnOrder);
  };

  const onSortClick = (key: string) => {
    if(sort){
      setSort({ ...sort, [key]: !sort[key] });
      sortCol === null ? setSortCol([key]) : setSortCol([key, ...sortCol]);
    }
  };

  return (
    <Container css={TableCss} className={className}>
      <BSTable className="mb-0" hover>
        {columns && (
          <>
            {draggable ? (
              {/* <DragDropContext onDragEnd={handleColumnDragEnd}>
                <Droppable
                  droppableId="table-column-droppable"
                  direction="horizontal"
                >
                  {(provided) => (
                    <thead ref={provided.innerRef} {...provided.droppableProps}>
                      <tr>
                        {columnOrder.map((key, index) => {
                          const { label } = columns.find(
                            (column) => column.key === key
                          );
                          return(
                            <Draggable
                              key={key}
                              draggableId={`table-column-${key}`}
                              index={index}
                            >
                              {(provided) => (
                                <th
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  key={index}
                                  className={
                                    checkedList[key] === false ? "d-none" : ""
                                  }
                                >
                                  <Container
                                    className="p-0 d-flex align-items-center"
                                    {...provided.dragHandleProps}
                                  >
                                    {typeof label === "string" ? (
                                      <Text
                                        label={label}
                                        className="pe-2 table-title"
                                        onClick={() => onSortClick(key)}
                                      />
                                    ) : (
                                      label
                                    )}
                                    {sortCol?.find((data) => {
                                      return data === key;
                                    }) === key && (
                                      <Container
                                        onClick={() => onSortClick(key)}
                                        className="p-0 w-auto m-0 align-items-center d-flex me-1"
                                      >
                                        {sort[key] ? (
                                          <SortAlphaDown />
                                        ) : (
                                          <SortAlphaUpAlt />
                                        )}
                                      </Container>
                                    )}
                                    {dropdownOptions &&
                                      <NavDropdown title="" className="pe-2">
                                        {columns.map(({ key, label }, index) => {
                                          return (
                                            <NavDropdown.Item key={key}>
                                              <Checkbox
                                                key={index}
                                                label={
                                                  typeof label === "string"
                                                    ? label
                                                    : ""
                                                }
                                                value={checkedList[key]}
                                                onClick={() => {
                                                  setCheckedList((prevState) => ({
                                                    ...prevState,
                                                    [key]: !checkedList[key],
                                                  }));
                                                }}
                                                className="checkbox"
                                              />
                                            </NavDropdown.Item>
                                          );
                                        })}
                                      </NavDropdown>
                                    }
                                  </Container>
                                </th>
                              )}
                            </Draggable>
                          
                          );
                        })}
                        {onViewClick && <th></th>}
                        {onEditClick && <th></th>}
                        {onDeleteClick && (
                          <th>
                            <ArrowClockwise
                              onClick={() => {
                                setSortCol(null);
                              }}
                            />
                          </th>
                        )}
                      </tr>
                    </thead>
                  )}
                </Droppable>
              </DragDropContext> */}
            ) : (
              <thead>
                <tr>
                  {columnOrder.map((key, index) => {
                    const { label } = columns.find(
                      (column) => column.key === key
                    );
                    return(
                      <th
                        key={index}
                        className={checkedList[key] === false ? "d-none" : ""}
                      >
                        <Container className="p-0 d-flex align-items-center">
                          {typeof label === "string" ? (
                            <Text
                              label={label}
                              className="pe-2 table-title"
                              onClick={() => onSortClick(key)}
                            />
                          ) : (
                            label
                          )}
                          {sortCol?.find((data) => {
                            return data === key;
                          }) === key && (
                            <Container
                              onClick={() => onSortClick(key)}
                              className="p-0 w-auto m-0 align-items-center d-flex me-1"
                            >
                              {sort[key] ? (
                                <SortAlphaDown />
                              ) : (
                                <SortAlphaUpAlt />
                              )}
                            </Container>
                          )}
                          {dropdownOptions &&
                            <NavDropdown title="" className="pe-2">
                              {columns.map(({key, label}, index) => {
                                return (
                                  <NavDropdown.Item key={key}>
                                    <Checkbox
                                      key={index} 
                                      label={typeof label === "string" ? label : ""}
                                      value={checkedList[key]}
                                      onClick={()=>{
                                        setCheckedList((prevState) => ({
                                          ...prevState,
                                          [key]: !checkedList[key],
                                        }));
                                      }}
                                      className="checkbox"
                                    />
                                  </NavDropdown.Item>
                                )
                              })}
                            </NavDropdown>
                          }
                        </Container>
                      </th>
                    );
                  })}
                  {onViewClick && <th></th>}
                  {onEditClick && <th></th>}
                  {onDeleteClick && (
                    <th>
                      <ArrowClockwise
                        onClick={() => {
                          setSortCol(null);
                        }}
                      />
                    </th>
                  )}
                </tr>
              </thead>
            )}
          </>
        )}

        {data && (
          <tbody className="table-body">
            {data &&
              data.map((row, i) => (
                <tr 
                  key={i} 
                  className={`${
                    onRowClick && selectedRowIndex === i
                      ? "selected-row" : ""
                  }`}
                  onClick={() => onRowClick && onRowClick(i)}
                >
                  {columnOrder.map((key) => (
                    <td
                      key={key}
                      className={
                        !checkedList
                          ? ""
                          : checkedList[key] === false
                          ? "d-none"
                          : ""
                      }
                    >
                      {typeof row[Object.keys(data[i])[key]] === "string" ? (
                        <Text label={row[Object.keys(data[i])[key]]} />
                      ) : (
                        row[Object.keys(data[i])[key]]
                      )}
                    </td>
                  ))}
                  {onViewClick && (
                    <td width={1}>
                      <ViewTransaction onClick={() => onViewClick(row)} />
                    </td>
                  )}
                  {onEditClick && (
                    <td width={1}>
                      <PencilSquare
                        className="icon"
                        onClick={() => onEditClick(row)}
                      />
                    </td>
                  )}
                  {onDeleteClick && (
                    <td>
                      <Trash3
                        className="icon"
                        onClick={() => onDeleteClick(row)}
                      />
                    </td>
                  )}
                </tr>
              ))}
          </tbody>
        )}
      </BSTable>
    </Container>
  );
};

export const getTableData = (data, currentPage, rowsPerPage) => {
  const dataArray = [];

  const startIndex = (currentPage - 1) * rowsPerPage;

  const endIndex = startIndex + rowsPerPage;

  const accurateEndIndex = Math.min(endIndex, data.length);

  for (let i = startIndex; i < accurateEndIndex; i++) {
    dataArray.push(data[i]);
  }

  return dataArray;
};

export default Table;

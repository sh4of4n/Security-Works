/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
16/06/2023            SawYN     1.0.0           - Create Table component
29/06/2023            SawYN     1.0.1           - Improve table functionalities (add in sort, checked list)
04/07/2023            SawYN     1.0.2           - Improve table functionality (change position)

*/
/** @jsxImportSource @emotion/react */
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Col, Container, Row, Table as BSTable, NavDropdown } from "react-bootstrap";
import Text from "../../components/Text";
import { Alarm, ArrowLeftRight, CalendarDate, Cash, GeoAlt, ListOl, PencilSquare, SortAlphaDown, SortAlphaUpAlt, Trash3 } from "react-bootstrap-icons";
import { ViewTransaction } from "../../components/Images";
import Checkbox from "../../components/Checkbox";
import TableCss from "styles/components/TableCss";
import TableSFCss from "./TableSFCss";
import ModalEditSF from "./ModalEditSF";
import Input from "components/Input";
import ModalEditSFCss from "./ModalEditSFCss";
import InputSF from "./InputSF";
import ModalDeleteSF from "./ModalDeleteSF";
import ModalDeleteSFCss from "./ModalDeleteSFCss";
import CheckboxSF from "./CheckboxSF";

export interface TableProps {
  title?: string
  onMoreClick?: () => void
  columns: Array<TableColumn>
  data: any
  dropdownOptions?: boolean
  checkedList?: any
  //setCheckedList?: Dispatch<SetStateAction<Object>>
  className?: string
  sort? :boolean
  setSort?: Dispatch<SetStateAction<boolean>>
  sortCol?: string
  setSortCol?: Dispatch<SetStateAction<string>>
  checkboxIcon?:boolean
  viewIcon?:boolean
  editIcon?: boolean
  deleteIcon?: boolean
  tableContainerRef?: React.RefObject<HTMLDivElement>
  handleScrollToTop?: () => void;
}

interface TableColumn {
  key: string
  label: string | JSX.Element
}

const TableSF = ({
  title,
  columns,
  data,
  dropdownOptions = false,
  checkedList,
  //setCheckedList,
  className,
  sort,
  setSort,
  sortCol,    //which column being sorting
  setSortCol,
  viewIcon = true,
  checkboxIcon = true,
  editIcon = true,
  deleteIcon=true,
  tableContainerRef,
  handleScrollToTop,
}: TableProps) => {
  const [checkboxIndex, setCheckboxIndex] = useState(null);

  const [columnOrder, setColumnOrder] = useState(columns.map((column) => column.key));
  const [formData, setFormData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const filterOptions = [
    { key: "0", value: "Location" , icon:<GeoAlt/>},
    { key: "1", value: "Date" ,icon:<CalendarDate/>},
    { key: "2", value: "Time" ,icon:<Alarm/>},
    { key: "3", value: "Price" ,icon:<Cash/>},
    { key: "4", value: "Amount" ,icon:<ListOl/>},
    { key: "5", value: "Remark" ,icon:<PencilSquare/>},
]

  const handleColumnReorder = (index) => {
    const newColumnOrder = [...columnOrder];
    const movedColumn = newColumnOrder.splice(index, 1);
    newColumnOrder.splice(parseInt(index)+1, 0, movedColumn[0]);
    
    setColumnOrder(newColumnOrder);
  };

  const handleInputChange = (key, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  const scrollToTop = () => {
    if (tableContainerRef.current) {
      tableContainerRef.current.scrollTop = 0;
      tableContainerRef.current.scrollLeft = 0;
    }
  };

  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    scrollToTop();
  }, [currentPage]);

  return (
    <Container css={TableSFCss} className="table-container" ref={tableContainerRef}>
      {title && (
        <Container>
          <Row>
            <Col>
              <Text label={title}/>
            </Col>
          </Row>
        </Container>
      )}
      <BSTable className="mb-0" css={TableSFCss}>
        {columns && (
          <thead>
            <tr>
              {columnOrder.map((key, index) => {
                const {label} = columns.find((column) => column.key === key)
                return (
                  dropdownOptions ?
                    <th key={index} className={checkedList[key] === false ? "d-none":""}>
                      <Container className="p-0 d-flex align-items-center">
                        {typeof label === "string" ?
                          <Text 
                            label={label} 
                            className="pe-2 table-title" 
                            onClick={()=>{setSort(!sort); setSortCol(key);}}/>
                        :
                          label
                        }
                        {sortCol === key &&
                          <Container onClick={()=>{setSort(!sort); setSortCol(key);}} className="p-0 w-auto m-0 align-items-center d-flex me-1">
                          {(sort ?
                            <SortAlphaDown/>
                            :
                            <SortAlphaUpAlt/>
                          )}
                          </Container>
                        }
                        <NavDropdown title="" className="pe-2">
                          {columns.map(({key, label}, index) => {
                            return (
                              <NavDropdown.Item key={key}>
                                <Checkbox
                                  key={index} 
                                  label={typeof label === "string" ? label : ""}
                                  value={checkedList[key]}
                                  onClick={()=>{
                                    setCheckboxIndex(key);
                                  }}
                                  className="checkbox"
                                />
                              </NavDropdown.Item>
                            )
                          })}
                        </NavDropdown>
                        {(index !== (columns.length-1)) && <ArrowLeftRight size={13} onClick={()=>{handleColumnReorder(index)}}/>}
                      </Container>
                    </th>
                  :
                    <th key={index}>
                      <Container className="d-flex p-0 align-items-center">
                        <Container className="d-flex p-0 w-auto m-0 align-items-center" onClick={()=>{setSort(!sort); setSortCol(key);}}>
                        {typeof label === "string" ?
                          <Text label={label} className="table-title me-2"/>
                        :
                          label
                        }
                        {sortCol === key &&
                          <Container onClick={()=>{setSort(!sort); setSortCol(key);}} className="p-0 w-auto m-0 align-items-center d-flex me-1">
                          {(sort ?
                            <SortAlphaDown/>
                            :
                            <SortAlphaUpAlt/>
                          )}
                          </Container>
                        }
                      </Container>
                      {(index !== (columns.length-1)) && <ArrowLeftRight size={13} onClick={()=>{handleColumnReorder(index)}}/>}
                      </Container>
                    </th>
                )
              })}
              {viewIcon && editIcon && deleteIcon && <th/>}
            </tr>
          </thead>
        )}
        {data && (
          <tbody>
          {data &&
            data.map((row, i) => (
              <tr key={i} css={TableSFCss} className={`${i % 2 === 0 ? "table-bg" : ""} ${row.className}`}>
                {columnOrder.map(( key ) => (
                  <td key={key} className={(!checkedList ? "" : (checkedList[key]) === false ? "d-none":"")}>
                    {typeof row[Object.keys(data[i])[key]] === "string" ?
                      <Text label={row[Object.keys(data[i])[key]]}/>
                      :
                      row[Object.keys(data[i])[key]]
                    }

                  </td>
                ))}
                {viewIcon && editIcon && deleteIcon && 
                <td width={1}>
                  <ViewTransaction/>
                  <PencilSquare className="icon" onClick={() => {setShow(true)} }/>
                  <Trash3 className="icon" onClick={() => {setShowDelete(true)}}/>
                </td>}
              </tr>
            ))}
            
        </tbody>
        )}

        <ModalEditSF
        show={show}
        setShow={setShow}
        headerTitle="Edit Record ✏️"
        css={ModalEditSFCss}
        className="modal-edit"
        onBack={()=>{setShow(false)}}
        >
            <form
                >
                    {/* Display form fields for adding */}
                    {filterOptions.map(({ key, value, icon }) => (
                        <Container key={key}>
                            <InputSF
                                label={value.toString()}
                                value={formData[key] || ""}
                                iconLeft={icon}
                                className="input-field"
                                onChange={(newValue) => handleInputChange(key, newValue)}
                                type={value === "Date" ? "date" : undefined || 
                                      value === "Amount" ? "number" : undefined ||
                                      value === "Time" ? "time" : undefined}
                            />
                        </Container>
                    ))}
                </form>
        </ModalEditSF>

        <ModalDeleteSF
        show={showDelete}
        setShow={setShowDelete}
        headerTitle="Delete Record 🗑️"
        css={ModalDeleteSFCss}
        className="modal-delete"
        onBack={()=>{setShowDelete(false)}}
        >
              <Text label={"Are you sure you want to delete this record?"}/>
        </ModalDeleteSF>

      </BSTable>
    </Container>
  )
}

export const getTableData = (data, currentPage, rowsPerPage) => {
  const dataArray = [];

  //To know the starting data index that is gonna be displayed on current page
  const startIndex = (currentPage - 1) * rowsPerPage;

  //To know the last data index that is gonna be displayed on current page
  const endIndex = startIndex + rowsPerPage;

  /*  To avoid accessing elements that don't exist
      Example: Currently there is 54 data (maximum element index = 53).
      The endIndex for the last page will be 50+5=55.
      It exceeded the amount of elements available leading to error.
      With the adjusted end index, if the endIndex exceed, it will choose the maximum available index in tableData
  */
  const accurateEndIndex = Math.min(endIndex, data.length);

  for(let i = startIndex; i < accurateEndIndex; i++)
  {
      dataArray.push(data[i]);
  }

  return dataArray;
}; 

export default TableSF;
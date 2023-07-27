/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
20/07/2023            ChongKW   1.0.0           - Create SearchModal component

*/

/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "components/Button";
import Text from "components/Text";
import Select from "components/Select";
import Input from "components/Input";
import Modal from "components/Modal";
import SearchModalCss from "styles/components/SearchModalCss";
import {
  ArrowClockwise,
  ChevronCompactDown,
  ChevronCompactUp,
} from "react-bootstrap-icons";
import { sortData } from "utilities/formatters";
import Pagination from "components/Pagination";
import Table, { getTableData } from "components/Table";

interface SearchModalProps {
  titles: Array<TableColumn>;
  onSearchClick: (data: any) => void;
  data: any;
  onSelectClick: (data: any, key: string) => void;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedFieldIndex: string;
}

interface TableColumn {
  key: string;
  label: string;
}

const SearchModal: React.FC<SearchModalProps> = ({
  titles,
  onSearchClick,
  data,
  onSelectClick,
  showModal,
  setShowModal,
  selectedFieldIndex,
}) => {

  const filterArr = [
    { key: "contains", value: "Contains" },
    { key: "equals", value: "Equals" },
    { key: "notEqual", value: "Not Equal" },
    { key: "startWith", value: "Start With" },
    { key: "endWith", value: "End With" },
  ];

  const rowsSelect = [
    { key: "1", value: "5" },
    { key: "2", value: "10" },
    { key: "3", value: "20" },
    { key: "4", value: "30" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [resetTbl, setResetTbl] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});
  const [dropdownValues, setDropdownValues] = useState<{
    [key: string]: string;
  }>({});
  const [errorMessage, setErrorMessage] = useState("");
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(false);

  const [sortCol, setSortCol] = useState([]); //columns being sorted
  const [sortAscending, setSortAscending] = useState({}); //sorting direction for each column

  let sortedData = [...data];
  sortedData = sortData(
    data,
    sortCol,
    sortCol.map((key) => sortAscending[key])
  );

  useEffect(() => {
    if (!showModal || resetTbl) {
      resetModalState();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetTbl, showModal]);

  const handleRowsPerPageChange = (value) => {
    setRowsPerPage(Number(value));
    setCurrentPage(1);
  };

  const handleInputChange = (key: string, value: string) => {
    setInputValues((prevInputValues) => ({ ...prevInputValues, [key]: value }));
  };

  const handleDropdownChange = (key: string, value: string) => {
    setDropdownValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const toggleSearchCollapse = () => {
    setIsSearchCollapsed((prevState) => !prevState);
  };

  const clearTblSetting = () => {
    setCurrentPage(1);
    setRowsPerPage(5);
    setErrorMessage("");
    setSelectedRowIndex(null);
    setSortCol([]);
    setSortAscending([]);
    setResetTbl(false);
  };

  const resetModalState = () => {
    setInputValues({});
    setDropdownValues({});
    onSearchClick({});
    setIsSearchCollapsed(false);
    clearTblSetting();
  };

  const handleSearchClick = () => {
    let searchData = { ...inputValues };
    onSearchClick(searchData);
    toggleSearchCollapse();
    clearTblSetting();
  };

  const handleRowSelect = (index: any) => {
    setSelectedRowIndex(index);
    setErrorMessage("");
  };

  const handleSelectClick = () => {
    if (selectedRowIndex != null) {
      const selectedRowIndexInAllData =
        (currentPage - 1) * rowsPerPage + selectedRowIndex;
      const selectedRow = sortedData[selectedRowIndexInAllData];
      onSelectClick(
        selectedRow[Object.keys(selectedRow)[selectedFieldIndex]],
        selectedFieldIndex
      );
      resetModalState();
      setShowModal(false);
    } else {
      setShowModal(true);
      if (sortedData.length <= 0) {
        setErrorMessage("No data can be selected.");
      } else {
        setErrorMessage("Select a row first.");
      }
    }
  };

  return (
    <>
      <Modal
        css={SearchModalCss}
        className="modal m-0 p-0"
        show={showModal}
        setShow={setShowModal}
        headerTitle="Lookup Data"
      >
        {/* Search criteria */}
        <Container className="d-flex flex-column align-items-center p-0">
          {!isSearchCollapsed && (
            <Container
              className={`d-flex flex-column align-items-center ${
                isSearchCollapsed ? "collapsed" : ""
              }`}
            >
              <Container
                className="search-ctn"
                style={{
                  maxHeight: sortedData.length <= 0 ? "30vh" : "18vh",
                }}
              >
                {titles.map((column) => (
                  <Container key={column.key} className="p-0">
                    <Row className="d-flex align-items-center justify-content-center p-1 m-0">
                      <Col sm={3}>
                        <Text
                          label={column.label}
                          className="text-nowrap"
                        />
                      </Col>
                      <Col sm={3}>
                        {column.label.includes("Status") ? (
                          <Select
                            options={filterArr}
                            value="Equals"
                            placeholder="Equals"
                            onSelect={(value) =>
                              handleDropdownChange(column.key, value)
                            }
                            disabled
                            className="p-0 small-padding"
                          />
                        ) : (
                          <Select
                            options={filterArr}
                            value={
                              dropdownValues[column.key] !== undefined
                                ? dropdownValues[column.key]
                                : ""
                            }
                            placeholder="Contains"
                            onSelect={(value) =>
                              handleDropdownChange(column.key, value)
                            }
                            className="p-0 small-padding"
                          />
                        )}
                      </Col>
                      <Col sm={6}>
                        {column.label.includes("Status") ? (
                          <Select
                            label=""
                            onSelect={(value) =>
                              handleDropdownChange(column.key, value)
                            }
                            value={dropdownValues[column.key] || ""}
                            options={[
                              { key: "approved", value: "Approved" },
                              { key: "pending", value: "Pending" },
                            ]}
                            className="p-0 small-padding"
                          />
                        ) : (
                          <Input
                            label=""
                            className="p-0 small-padding"
                            value={inputValues[column.key] || ""}
                            onChange={(value) =>
                              handleInputChange(column.key, value)
                            }
                          />
                        )}
                      </Col>
                    </Row>
                  </Container>
                ))}
              </Container>
              <Container className="w-50 d-flex justify-content-around mb-1">
                <Button
                  label="Clear"
                  onClick={() => {
                    setInputValues({});
                    setDropdownValues({});
                  }}
                  className="w-25 mt-2 rounded-pill red-btn"
                />
                <Button
                  label="Search"
                  onClick={handleSearchClick}
                  className="w-25 mt-2 rounded-pill green-btn"
                />
              </Container>
            </Container>
          )}
          {isSearchCollapsed ? (
            <Container
              onClick={toggleSearchCollapse}
              className="d-flex align-items-center justify-content-center arrow-ctn rounded-3"
            >
              <ChevronCompactDown size={25} />
            </Container>
          ) : (
            <Container
              onClick={toggleSearchCollapse}
              className="d-flex align-items-center justify-content-center arrow-ctn rounded-3"
            >
              <ChevronCompactUp size={25} />
            </Container>
          )}
        </Container>
        <hr />

        {errorMessage && (
          <Container
            className="alert alert-danger text-center p-1"
            role="alert"
          >
            {errorMessage}
          </Container>
        )}

        {sortedData.length > 0 ? (
          <Container>
            <Container
              className="table-ctn table-responsive p-0"
              style={{
                maxHeight: isSearchCollapsed
                  ? rowsPerPage === 5
                    ? "28vh"
                    : "50vh"
                  : "28vh",
              }}
            >
              <Table
                columns={titles}
                data={getTableData(sortedData, currentPage, rowsPerPage)}
                checkedList={[]}
                draggable={false}
                sort={sortAscending}
                setSort={setSortAscending}
                sortCol={sortCol}
                setSortCol={setSortCol}
                onRowClick={handleRowSelect}
                selectedRowIndex={selectedRowIndex}
                className="table p-0"
              />
            </Container>
            <Container className="d-flex align-items-center justify-content-around w-75 my-2">
              <Pagination
                dataRendered={currentPage}
                setDataRendered={setCurrentPage}
                totalPages={Math.ceil(data.length / rowsPerPage)}
                maxPageShown={5}
                className="p-0 m-0 custom-pagination "
              />

              <Select
                label="Rows per page"
                placeholder={rowsPerPage.toString()}
                options={rowsSelect}
                value={rowsPerPage.toString()}
                onSelect={handleRowsPerPageChange}
                className="row-per-page m-0 w-auto small-padding"
              />

              <ArrowClockwise
                onClick={() => {
                  setResetTbl(true);
                }}
              />
            </Container>
          </Container>
        ) : (
          <Container className="text-center">
            <Text label="No data to display." />
          </Container>
        )}
        <Container className="w-75 d-flex justify-content-around">
          <Button
            label="Cancel"
            onClick={() => {
              setShowModal(false);
              resetModalState();
            }}
            className="red-btn rounded-pill w-25"
          />
          <Button
            label="Select"
            onClick={handleSelectClick}
            className="green-btn rounded-pill w-25"
          />
        </Container>
      </Modal>
    </>
  );
};

export default SearchModal;

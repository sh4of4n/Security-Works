/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
20/07/2023            Steven    1.0.0           - Create Task Assignment component
*/

import React, {
  useState,
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  ChevronDoubleDown,
  ChevronDoubleLeft,
  ChevronDoubleRight,
  ChevronDoubleUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "react-bootstrap-icons";

import Table from "components/Table";
import { sortData } from "utilities/formatters";

interface TaskAssignProps {
  dataAvailable: Array<{
    key: string;
    value: any;
  }>;
  dataSelected: Array<{
    key: string;
    value: any;
  }>;
  disabled?: boolean;
  setDataSelected: Dispatch<SetStateAction<Object>>;
  setDataAvailable: Dispatch<SetStateAction<Object>>;
  className?: string;
}

const TaskAssign = ({
  dataAvailable, // LEFT table (default no records)
  dataSelected, // RIGHT table (default has records)
  setDataSelected,
  setDataAvailable,
  className,
  disabled = false,
}: TaskAssignProps) => {
  const [checkedList, setCheckedList] = useState({});

  const [sortAscendingDataAvailable, setSortAscendingDataAvailable] =
    useState(true);
  const [sortAscendingDataSelected, setSortAscendingDataSelected] =
    useState(true);

  const [sortColDataAvailable, setSortColDataAvailable] = useState(null);
  const [sortColDataSelected, setSortColDataSelected] = useState(null);

  let sortedDataAvailable = [...dataAvailable];
  let sortedDataSelected = [...dataSelected];

  sortedDataAvailable = sortData(
    sortedDataAvailable,
    sortColDataAvailable,
    sortAscendingDataAvailable
  );
  sortedDataSelected = sortData(
    sortedDataSelected,
    sortColDataSelected,
    sortAscendingDataSelected
  );

  // Refs to hold references to the table containers
  const leftTableRef = useRef<HTMLDivElement>(null);
  const rightTableRef = useRef<HTMLDivElement>(null);

  // Selected row index of left or right table
  const [selectedLeftRow, setSelectedLeftRow] = useState<number | null>(null);
  const [selectedRightRow, setSelectedRightRow] = useState<number | null>(null);

  // Handle which record in LEFT or RIGHT table has been selected
  const handleRowClick = (index: number, table: "left" | "right") => {
    if (table === "left") {
      setSelectedLeftRow(index);
    } else {
      setSelectedRightRow(index);
    }
  };

  // Move only ONE record from <RIGHT to LEFT> or from <LEFT to RIGHT> table
  const handleLeftRightArrowClick = (direction: "left" | "right") => {
    if (direction === "left" && selectedRightRow !== null) {
      const selectedData = sortedDataSelected[selectedRightRow];
      setDataAvailable([...sortedDataAvailable, selectedData]);
      setDataSelected(
        sortedDataSelected.filter((item, index) => index !== selectedRightRow)
      );
      setSelectedRightRow(null);
    } else if (direction === "right" && selectedLeftRow !== null) {
      const selectedData = sortedDataAvailable[selectedLeftRow];
      setDataSelected([...sortedDataSelected, selectedData]);
      setDataAvailable(
        sortedDataAvailable.filter((item, index) => index !== selectedLeftRow)
      );
      setSelectedLeftRow(null);
    }
  };

  // Move ALL records from <RIGHT to LEFT> or from <LEFT to RIGHT> table
  const handleDoubleLeftRightArrowClick = (direction: "left" | "right") => {
    if (direction === "left" && sortedDataSelected.length > 0) {
      setDataAvailable([...sortedDataAvailable, ...sortedDataSelected]);
      setDataSelected([]);
      setSelectedRightRow(null);
    } else if (direction === "right" && sortedDataAvailable.length > 0) {
      setDataSelected([...sortedDataSelected, ...sortedDataAvailable]);
      setDataAvailable([]);
      setSelectedLeftRow(null);
    }
  };

  // Move the selected record in right table UP or DOWN one row
  const handleUpDownArrowClick = (direction: "up" | "down") => {
    if (selectedRightRow !== null) {
      const newRightTableData = [...dataSelected];
      const selectedData = newRightTableData[selectedRightRow];
      const newIndex =
        direction === "up" ? selectedRightRow - 1 : selectedRightRow + 1;

      if (newIndex >= 0 && newIndex < dataSelected.length) {
        newRightTableData.splice(selectedRightRow, 1); // Remove the selected row from the array
        newRightTableData.splice(newIndex, 0, selectedData); // Insert the selected row one position up or down

        setDataSelected(newRightTableData);
        setSelectedRightRow(newIndex); // Update the selected row index

        // Scroll the selected row into view
        const selectedRowElement =
          rightTableRef.current?.querySelector(`.selected-row`);
        if (selectedRowElement) {
          selectedRowElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }
    }
  };

  // Move the selected record in right table to the FIRST or LAST position
  const handleDoubleUpDownArrowClick = (direction: "up" | "down") => {
    if (selectedRightRow !== null) {
      const newRightTableData = [...dataSelected];
      const selectedData = newRightTableData[selectedRightRow];
      newRightTableData.splice(selectedRightRow, 1);

      if (direction === "up") {
        newRightTableData.unshift(selectedData);
        setSelectedRightRow(0);
      } else {
        newRightTableData.push(selectedData);
        setSelectedRightRow(newRightTableData.length - 1);
      }

      setDataSelected(newRightTableData);

      // Scroll the right table container to the top or bottom
      const tableContainer = rightTableRef.current;
      if (tableContainer) {
        if (direction === "up") {
          tableContainer.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const scrollHeight = tableContainer.scrollHeight;
          tableContainer.scrollTo({ top: scrollHeight, behavior: "smooth" });
        }
      }
    }
  };

  // Handle up/down/left/right arrows key press events
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const handleRowSelectionAndScroll = (
        selectedRow: number,
        dataLength: number
      ) => {
        const newIndex =
          selectedRow +
          (event.key === "ArrowUp" || event.key === "ArrowLeft" ? -1 : 1);

        if (newIndex >= 0 && newIndex < dataLength) {
          if (selectedRow === selectedLeftRow) setSelectedLeftRow(newIndex);
          if (selectedRow === selectedRightRow) setSelectedRightRow(newIndex);

          const selectedRowElement = (
            selectedRow === selectedLeftRow ? leftTableRef : rightTableRef
          ).current?.querySelector(`.selected-row`);

          if (selectedRowElement) {
            selectedRowElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }
      };

      if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        handleRowSelectionAndScroll(selectedLeftRow, sortedDataAvailable.length);
        handleRowSelectionAndScroll(selectedRightRow, sortedDataSelected.length);

      } else if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        handleRowSelectionAndScroll(selectedLeftRow, sortedDataAvailable.length);
        handleRowSelectionAndScroll(selectedRightRow, sortedDataSelected.length);
      }
    };

    // Add event listener for key press
    window.addEventListener("keydown", handleKeyPress);

    // Remove event listener on component unmount to prevent memory leaks
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [
    selectedLeftRow,
    selectedRightRow,
    sortedDataAvailable.length,
    sortedDataSelected.length,
  ]);

  return (
    <Container className={className}>
      <Row>
        <Col className="p-0">
          <Container className="table-container" ref={leftTableRef}>
            <Table
              className="left-table p-0"
              columns={[{ key: "1", label: "Tasks Available" }]}
              checkedList={checkedList}
              setCheckedList={setCheckedList}
              sort={sortAscendingDataAvailable}
              setSort={setSortAscendingDataAvailable}
              sortCol={sortColDataAvailable}
              setSortCol={setSortColDataAvailable}
              data={sortedDataAvailable}
              draggable={false}
              onRowClick={(index: number) => handleRowClick(index, "left")}
              selectedRowIndex={selectedLeftRow}
            />
          </Container>
        </Col>

        {!disabled && (
          <Col xs="auto" className="p-0 left-right-arrow-col">
            <Container className="arrow-buttons">
              <ChevronDoubleRight
                onClick={() => handleDoubleLeftRightArrowClick("right")}
                className="double-right-arrow"
              />

              <ChevronRight
                onClick={() => handleLeftRightArrowClick("right")}
                className="right-arrow"
              />

              <ChevronLeft
                onClick={() => handleLeftRightArrowClick("left")}
                className="left-arrow"
              />

              <ChevronDoubleLeft
                onClick={() => handleDoubleLeftRightArrowClick("left")}
                className="double-left-arrow"
              />
            </Container>
          </Col>
        )}

        <Col className="p-0">
          <Container className="table-container" ref={rightTableRef}>
            <Table
              className="right-table p-0"
              columns={[{ key: "1", label: "Tasks Selected" }]}
              checkedList={checkedList}
              setCheckedList={setCheckedList}
              sort={sortAscendingDataSelected}
              setSort={setSortAscendingDataSelected}
              sortCol={sortColDataSelected}
              setSortCol={setSortColDataSelected}
              data={sortedDataSelected}
              draggable={false}
              onRowClick={(index: number) => handleRowClick(index, "right")}
              selectedRowIndex={selectedRightRow}
            />
          </Container>
        </Col>

        {!disabled && (
          <Col xs="auto" className="p-0 up-down-arrow-col">
            <Container className="arrow-buttons">
              <ChevronDoubleUp
                onClick={() => handleDoubleUpDownArrowClick("up")}
              />

              <ChevronUp onClick={() => handleUpDownArrowClick("up")} />

              <ChevronDown onClick={() => handleUpDownArrowClick("down")} />

              <ChevronDoubleDown
                onClick={() => handleDoubleUpDownArrowClick("down")}
              />
            </Container>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default TaskAssign;

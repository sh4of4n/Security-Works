/** @jsxImportSource @emotion/react */

import { 
  Search,
  SortAlphaDown,
  SortAlphaDownAlt, 
  FunnelFill,
  ArrowUpSquareFill,
  FileEarmarkSpreadsheet,
  FileEarmarkExcelFill,
  FileEarmarkPdfFill,
} from "react-bootstrap-icons";

import React, { useRef, useState, useContext } from "react";
import Table, { getTableData } from "styles/V1-ShaoFan/TableSF";
import Text from "components/Text";
import AdvancedInput from "components/AdvancedInput";
import ButtonSF from "styles/V1-ShaoFan/ButtonSF";
import Panel from "components/Panel";
import Modal from "components/Modal";
import Breadcrumb from "components/Breadcrumb";
import Pagination from "components/Pagination";
import { PartnerContext } from "contexts/PartnerContext";
import { Container } from "react-bootstrap";
import PageTemplate from "components/PageTemplate";
import BrowseScreenSFCss from "styles/V1-ShaoFan/BrowseScreenSFCss";
import DropdownSF from "styles/V1-ShaoFan/DropdownSF";
import DropdownSFCss from "styles/V1-ShaoFan/DropdownSFCss";
import DropdownCheckboxSF from "styles/V1-ShaoFan/DropdownCheckboxSF";
import ScrollToTopButtonSF from "styles/V1-ShaoFan/ScrollToTopButtonSF";
import ModalSF from "styles/V1-ShaoFan/ModelSF";
import Input from "components/Input";
import DropdownButtonSF from "styles/V1-ShaoFan/DropdownButtonSF";

const BrowseScreenSF = () => {
    const [pwd, setPwd] = useState("");

    const [sortOrder, setSortOrder] = useState("asc");
    const [sortColumn, setSortColumn] = useState("");

    const handleSort = (column) => {
      if (column === sortColumn) {
        // Reverse the sorting order if the same column is clicked again
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
      } else {
        // Sort the new column in ascending order
        setSortOrder("asc");
        setSortColumn(column);
      }
    };
    
    const filterOptions = [
      {key: "0", value:"Location"},
      {key: "1", value:"Date"},
      {key: "2", value:"Time"},
      {key: "3", value:"Price"},
      {key: "4", value:"Amount"},
      {key: "5", value:"Remark"},
    ];

    const tableTitles = [
      {key: "0", label:<><Text label="Location" className="locationtext"onClick={() => handleSort("Title")} /> {sortColumn === "Title" && sortOrder === "asc" ? <SortAlphaDown /> : <SortAlphaDownAlt />}</>},
      {key: "1", label:"Date"},
      {key: "2", label:"Time"},
      {key: "3", label:"Price"},
      {key: "4", label:"Amount"},
      {key: "5", label:"Remark"},
    ]

    const tableCol = [ // todo - testing purpose, to delete in the future
    { descriptions: "Bali, Selangor, MYS", date: "03/08/2022", time: "12.52", amount: "+ RM923.00", test: "- RM7.00", try:"testtt"},
    { descriptions: "Transfer", date: "25/03/2022", time: "02.12", amount: "+ RM10.00", test: "- RM7.00", try:"testtt"},
    { descriptions: "Pahang, MYS", date: "30/12/2021", time: "08.32", amount: "- RM120.00", test: "- RM7.00", try:"testtt"},
    { descriptions: "Finexus Cafe W.Persekutuan, MYS", date: "16/11/2022", time: "11.02", amount: "- RM7.00", test: "- RM7.00", try:"testtt" },
    { descriptions: "Reload - FPX, MYS", date: "10/11/2022", time: "10.12", amount: "+ RM1000.00", test: "- RM7.00", try:"testtt" },
    { descriptions: "Ole-Ole Bali, Selangor, MYS", date: "03/08/2022", time: "12.52", amount: "+ RM923.00", test: "- RM7.00", try:"testtt" },
    { descriptions: "Transfer - DuitNow", date: "25/03/2022", time: "02.12", amount: "+ RM10.00", test: "- RM7.00", try:"testtt" },
    { descriptions: "Converse, Pahang, MYS", date: "30/12/2021", time: "08.32", amount: "- RM120.00", test: "- RM7.00", try:"testtt"},
    { descriptions: " MYS", date: "16/11/2022", time: "11.02", amount: "- RM7.00", test: "- RM7.00", try:"testtt" },
    { descriptions: " FPX, MYS", date: "10/11/2022", time: "10.12", amount: "+ RM1000.00", test: "- RM7.00", try:"testtt" },
    { descriptions: "Bali, Selangor, MYS", date: "03/08/2022", time: "12.52", amount: "+ RM923.00", test: "- RM7.00", try:"testtt" },
    { descriptions: "Transfer", date: "25/03/2022", time: "02.12", amount: "+ RM10.00", test: "- RM7.00", try:"testtt"},
    { descriptions: "Bali, Selangor, MYS", date: "03/08/2022", time: "12.52", amount: "+ RM923.00", test: "- RM7.00", try:"testtt" },
    { descriptions: "Transfer", date: "25/03/2022", time: "02.12", amount: "+ RM10.00", test: "- RM7.00", try:"testtt" },
    { descriptions: "Pahang, MYS", date: "30/12/2021", time: "08.32", amount: "- RM120.00", test: "- RM7.00", try:"testtt" },
    { descriptions: "Finexus Cafe W.Persekutuan, MYS", date: "16/11/2022", time: "11.02", amount: "- RM7.00", test: "- RM7.00", try:"testtt" },
    { descriptions: "Reload - FPX, MYS", date: "10/11/2022", time: "10.12", amount: "+ RM1000.00", test: "- RM7.00", try:"testtt" },
    { descriptions: "Ole-Ole Bali, Selangor, MYS", date: "03/08/2022", time: "12.52", amount: "+ RM923.00", test: "- RM7.00", try:"testtt"},
    { descriptions: "Transfer - DuitNow", date: "25/03/2022", time: "02.12", amount: "+ RM10.00", test: "- RM7.00", try:"testtt" },
    { descriptions: "Converse, Pahang, MYS", date: "30/12/2021", time: "08.32", amount: "- RM120.00", test: "- RM7.00", try:"testtt"},
    { descriptions: " MYS", date: "16/11/2022", time: "11.02", amount: "- RM7.00", test: "- RM7.00", try:"testtt" },
    { descriptions: " FPX, MYS", date: "10/11/2022", time: "10.12", amount: "+ RM1000.00", test: "- RM7.00", try:"testtt" },
    { descriptions: "Bali, Selangor, MYS", date: "03/08/2022", time: "12.52", amount: "+ RM923.00", test: "- RM7.00", try:"testtt"},
    { descriptions: "Transfer", date: "25/03/2022", time: "02.12", amount: "+ RM10.00", test: "- RM7.00", try:"testtt" },
    { descriptions: "Pahang, MYS", date: "30/12/2021", time: "08.32", amount: "- RM120.00", test: "- RM7.00", try:"testtt"}
  ]

  const sortedData = tableCol.sort((a, b) => {
    const valueA = a.descriptions.toLowerCase();
    const valueB = b.descriptions.toLowerCase();
  
    // Sort based on the selected column and order
    if (sortColumn === "Title") {
      return sortOrder === "asc" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    }
  
    // Return 0 to maintain the original order for other columns
    return 0;
  });
  
    const [show, setShow] = useState(false);
  
    const [currentPage, setCurrentPage] = useState(1);
  
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const {theme} = useContext(PartnerContext);

    const handleSelectedOptions = (selectedValue:any) => {
      console.log("Selected option:", selectedValue);
    }

    const exportOptions = [
      { key: "Excel", value: <FileEarmarkExcelFill className="mb-1" /> },
      { key: "PDF", value: <FileEarmarkPdfFill className="mb-1" /> },
    ];

    const handleInputChange = (key, value) => {
      //setFormData((prevData) => ({ ...prevData, [key]: value }));
    };

    const handleSelectOption = (selectedValue: any) => {
      console.log("Selected option:", selectedValue);
      // Perform any necessary actions based on the selected option
    };

    /* const handleScrollTop = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      scrollToTop();
    };
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }; */
  
    return (
      <PageTemplate>
        <Container >
          <header css={BrowseScreenSFCss(theme)} className="title">
          SECURITYWORKS FRAME  
          </header>
          <Breadcrumb css={BrowseScreenSFCss(theme)} className="breadcrumb" children="" active="Browse"/>
          <Container css={BrowseScreenSFCss(theme)} className="searchbar">
            <AdvancedInput
              label=""
              value={pwd}
              //leftIcon={<Search/>}
              rightIcon={<Search/>}
              onChange={(e) => {setPwd(e)}}
            />
          </Container>

        <Container >
              <DropdownCheckboxSF
                css={DropdownSFCss(theme)}
                onSelect={handleSelectedOptions}
                label="Filter by"
                icon={<FunnelFill/>}
                className="filterdropdown" 
                options={filterOptions} 
                disabled={false}
              />
        </Container>
      
          <Panel css={BrowseScreenSFCss(theme)} className="buttonpanel">
            <ButtonSF
              css={BrowseScreenSFCss(theme)} 
              className="newbutton"
              label="+ New"
              onClick={() => {setShow(true)}}
            />

            <DropdownButtonSF
              css={BrowseScreenSFCss(theme)} 
              className="exportbutton"
              icon={<FileEarmarkSpreadsheet/>}
              label="Export"
              disabled={false}
              options={exportOptions}
              onSelect={() =>handleSelectOption}
            />
          </Panel>

          <ModalSF
            show={show}
            setShow={setShow}
            headerTitle="Add New Record"

          >
            <div>
              <form>
            {/* Display form fields for adding */}
            {filterOptions.map(({ key, value }) => (
              <div key={key}>
                <Input
                  label={value.toString()}
                  value={FormData[key] || ""}
                  onChange={(value) => handleInputChange(key, value)}
                  className="input-field"
                />
              </div>
            ))}
          </form>
            </div>
          </ModalSF>
          
          <Table 
            css={BrowseScreenSFCss(theme)} 
            className="bodymargin"
            //title="Test" 
            columns={tableTitles} 
            data={getTableData(tableCol, currentPage, rowsPerPage)} 
            // data={tableCol} 
          />
  
          <Pagination
            dataRendered={currentPage}
            setDataRendered={setCurrentPage}
            totalPages={Math.ceil(tableCol.length/rowsPerPage)}
            maxPageShown={5}
          />
          

        </Container>
          {/* <Container>
            <ScrollToTopButtonSF 
            disabled={false} 
            //onClick={handleScrollTop}
            icon={<ArrowUpSquareFill/>}
            className="scroll-to-top-button"
            />
          </Container> */}
      </PageTemplate>
    );
  };
  
  export default BrowseScreenSF;
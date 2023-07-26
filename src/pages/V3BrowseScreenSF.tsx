/** @jsxImportSource @emotion/react */

import {
    Alarm,
    ArrowClockwise,
    ArrowUpCircle,
    CalendarDate,
    Cash,
    Eye,
    EyeFill,
    Filter,
    FunnelFill,
    GeoAlt,
    ListOl,
    PencilSquare,
    PlusCircle,
    Search
} from "react-bootstrap-icons";

import Text from "components/Text";
import PageTemplate from "components/PageTemplate";
import React, { SetStateAction, useContext, useState , useRef, useEffect} from "react";
import { PartnerContext } from "contexts/PartnerContext";
import { Container, Dropdown } from "react-bootstrap";
import V3BrowseScreenSFCss from "styles/V3-ShaoFan/V3BrowseScreenSFCss";
import AdvancedInput from "components/AdvancedInput";
import ButtonSF from "styles/V3-ShaoFan/ButtonSF";
import Pagination from "components/Pagination";
import TableSF from "styles/V3-ShaoFan/TableSF";
import ModalFilterSF from "styles/V3-ShaoFan/ModalFilterSF";
import ModalFilterSFCss from "styles/V3-ShaoFan/ModalFilterSFCss";
import InputSF from "styles/V3-ShaoFan/InputSF";
import ModalAddSF from "styles/V3-ShaoFan/ModalAddSF";
import ModalAddSFCss from "styles/V3-ShaoFan/ModalAddSFCss";
import ModalConfirmSF from "styles/V3-ShaoFan/ModalConfirmSF";
import ModalConfirmSFCss from "styles/V3-ShaoFan/ModalConfirmSFCss";
import DropdownCheckboxSF from "styles/V3-ShaoFan/DropdownCheckboxSF";
import DropdownSFCss from "styles/V3-ShaoFan/DropdownSFCss";
import ModalSearchSF from "styles/V3-ShaoFan/ModalSearchSF";
import ModalSearchSFCss from "styles/V3-ShaoFan/ModalSearchSFCss";
import Checkbox from "components/Checkbox";
import CheckboxSF from "styles/V3-ShaoFan/CheckboxSF";
import ScrollToTopButtonSF from "styles/V3-ShaoFan/ScrollToTopButtonSF";
import ScrollToTopButtonSFCss from "styles/V3-ShaoFan/ScrollToTopButtonSFCss";
import TableSFCss from "styles/V3-ShaoFan/TableSFCss";


const V3BrowseScreenSF = () => {

    const [pwd, setPwd] = useState("");

    const [sortOrder, setSortOrder] = useState("asc");
    const [formData, setFormData] = useState({});
    const [searchFormData, setSearchFormData] = useState({});
    const [addFormData, setAddFormData] = useState({});
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
        { key: "0", value: "Location" , icon:<GeoAlt/>},
        { key: "1", value: "Date" ,icon:<CalendarDate/>},
        { key: "2", value: "Time" ,icon:<Alarm/>},
        { key: "3", value: "Price" ,icon:<Cash/>},
        { key: "4", value: "Amount" ,icon:<ListOl/>},
        { key: "5", value: "Remark" ,icon:<PencilSquare/>},
    ]

    const tableTitles = [
        { key: "0", label: "Location" },
        { key: "1", label: "Date" },
        { key: "2", label: "Time" },
        { key: "3", label: "Price" },
        { key: "4", label: "Amount" },
        { key: "5", label: "Remark" },
        { key: "6", label: "Transaction" },
        { key: "7", label: "Testing" },
        { key: "8", label: "Testing" },
        { key: "9", label: "IP Address" },
        { key: "10", label: "Timestamp" },
        { key: "11", label: "Status" },
    ]

    const tableCol = [ 
        { descriptions: "Bali, Selangor, MYS", date: "03/08/2022", time: "12.52", amount: "+ RM923.00", test: "- RM7.00", try: "testtt" , transaction: "312391087872", testing:"2314535" , testing1:"234289479" , ip:"190.344.213.123" , timestamp:"14:34" , approval:"Approve"},
        { descriptions: "Transfer", date: "25/03/2022", time: "02.12", amount: "+ RM10.00", test: "- RM7.00", try: "testtt" , transaction: "312391087872", testing:"2314535" , testing1:"234289479", ip:"190.344.213.123" , timestamp:"14:34" , approval:"Approve"},
        { descriptions: "Pahang, MYS", date: "30/12/2021", time: "08.32", amount: "- RM120.00", test: "- RM7.00", try: "testtt" , transaction: "312391087872", testing:"2314535" , testing1:"234289479", ip:"190.344.213.123" , timestamp:"14:34" , approval:"Approve"},
        { descriptions: "Finexus Cafe W.Persekutuan, MYS", date: "16/11/2022", time: "11.02", amount: "- RM7.00", test: "- RM7.00", try: "testtt" , transaction: "312391087872", testing:"2314535" , testing1:"234289479", ip:"190.344.213.123" , timestamp:"14:34" , approval:"Approve"},
        { descriptions: "Reload - FPX, MYS", date: "10/11/2022", time: "10.12", amount: "+ RM1000.00", test: "- RM7.00", try: "testtt" , transaction: "312391087872", testing:"2314535" , testing1:"234289479", ip:"190.344.213.123" , timestamp:"14:34" , approval:"Approve"},
        { descriptions: "Ole-Ole Bali, Selangor, MYS", date: "03/08/2022", time: "12.52", amount: "+ RM923.00", test: "- RM7.00", try: "testtt" , transaction: "312391087872", testing:"2314535" , testing1:"234289479", ip:"190.344.213.123" , timestamp:"14:34" , approval:"Approve"},
        { descriptions: "Transfer - DuitNow", date: "25/03/2022", time: "02.12", amount: "+ RM10.00", test: "- RM7.00", try: "testtt" , transaction: "312391087872", testing:"2314535" , testing1:"234289479", ip:"190.344.213.123" , timestamp:"14:34" , approval:"Approve"},
        { descriptions: "Converse, Pahang, MYS", date: "30/12/2021", time: "08.32", amount: "- RM120.00", test: "- RM7.00", try: "testtt" , transaction: "312391087872", testing:"2314535" , testing1:"234289479", ip:"190.344.213.123" , timestamp:"14:34" , approval:"Approve"},
        { descriptions: " MYS", date: "16/11/2022", time: "11.02", amount: "- RM7.00", test: "- RM7.00", try: "testtt" , transaction: "312391087872", testing:"2314535" , testing1:"234289479", ip:"190.344.213.123" , timestamp:"14:34" , approval:"Approve"},
        { descriptions: " FPX, MYS", date: "10/11/2022", time: "10.12", amount: "+ RM1000.00", test: "- RM7.00", try: "testtt" , transaction: "312391087872", testing:"2314535" , testing1:"234289479", ip:"190.344.213.123" , timestamp:"14:34" , approval:"Approve"},
        { descriptions: "Bali, Selangor, MYS", date: "03/08/2022", time: "12.52", amount: "+ RM923.00", test: "- RM7.00", try: "testtt" , transaction: "312391087872", testing:"2314535" , testing1:"234289479", ip:"190.344.213.123" , timestamp:"14:34" , approval:"Approve"},
        { descriptions: "Transfer", date: "25/03/2022", time: "02.12", amount: "+ RM10.00", test: "- RM7.00", try: "testtt" , transaction: "312391087872", testing:"2314535" , testing1:"234289479", ip:"190.344.213.123" , timestamp:"14:34" , approval:"Approve"},
        { descriptions: "Bali, Selangor, MYS", date: "03/08/2022", time: "12.52", amount: "+ RM923.00", test: "- RM7.00", try: "testtt" , transaction: "312391087872", testing:"2314535" , testing1:"234289479", ip:"190.344.213.123" , timestamp:"14:34" , approval:"Approve"},
        { descriptions: "Transfer", date: "25/03/2022", time: "02.12", amount: "+ RM10.00", test: "- RM7.00", try: "testtt" , transaction: "312391087872", testing:"2314535" , testing1:"234289479", ip:"190.344.213.123" , timestamp:"14:34" , approval:"Approve"},
        { descriptions: "Pahang, MYS", date: "30/12/2021", time: "08.32", amount: "- RM120.00", test: "- RM7.00", try: "testtt" , transaction: "312391087872", testing:"2314535" , testing1:"234289479", ip:"190.344.213.123" , timestamp:"14:34" , approval:"Approve"},
        { descriptions: "Finexus Cafe W.Persekutuan, MYS", date: "16/11/2022", time: "11.02", amount: "- RM7.00", test: "- RM7.00", try: "testtt" , transaction: "312391087872", testing:"2314535" , testing1:"234289479", ip:"190.344.213.123" , timestamp:"14:34" , approval:"Approve"},
        { descriptions: "Reload - FPX, MYS", date: "10/11/2022", time: "10.12", amount: "+ RM1000.00", test: "- RM7.00", try: "testtt" , transaction: "312391087872", testing:"2314535" , testing1:"234289479", ip:"190.344.213.123" , timestamp:"14:34" , approval:"Approve"},
        { descriptions: "Ole-Ole Bali, Selangor, MYS", date: "03/08/2022", time: "12.52", amount: "+ RM923.00", test: "- RM7.00", try: "testtt" , transaction: "312391087872", testing:"2314535" , testing1:"234289479", ip:"190.344.213.123" , timestamp:"14:34" , approval:"Approve"},
        { descriptions: "Transfer - DuitNow", date: "25/03/2022", time: "02.12", amount: "+ RM10.00", test: "- RM7.00", try: "testtt" , transaction: "312391087872", testing:"2314535" , testing1:"234289479", ip:"190.344.213.123" , timestamp:"14:34" , approval:"Approve"},
        { descriptions: "Converse, Pahang, MYS", date: "30/12/2021", time: "08.32", amount: "- RM120.00", test: "- RM7.00", try: "testtt" , transaction: "312391087872", testing:"2314535" , testing1:"234289479", ip:"190.344.213.123" , timestamp:"14:34" , approval:"Approve"},
        { descriptions: " MYS", date: "16/11/2022", time: "11.02", amount: "- RM7.00", test: "- RM7.00", try: "testtt" , transaction: "312391087872", testing:"2314535" , testing1:"234289479", ip:"190.344.213.123" , timestamp:"14:34" , approval:"Approve"},
        { descriptions: " FPX, MYS", date: "10/11/2022", time: "10.12", amount: "+ RM1000.00", test: "- RM7.00", try: "testtt" , transaction: "312391087872", testing:"2314535" , testing1:"234289479", ip:"190.344.213.123" , timestamp:"14:34" , approval:"Approve"},
        { descriptions: "Bali, Selangor, MYS", date: "03/08/2022", time: "12.52", amount: "+ RM923.00", test: "- RM7.00", try: "testtt" , transaction: "312391087872", testing:"2314535" , testing1:"234289479", ip:"190.344.213.123" , timestamp:"14:34" , approval:"Approve"},
        { descriptions: "Transfer", date: "25/03/2022", time: "02.12", amount: "+ RM10.00", test: "- RM7.00", try: "testtt" , transaction: "312391087872", testing:"2314535" , testing1:"234289479", ip:"190.344.213.123" , timestamp:"14:34" , approval:"Approve"},
        { descriptions: "Pahang, MYS", date: "30/12/2021", time: "08.32", amount: "- RM120.00", test: "- RM7.00", try: "testtt", transaction: "312391087872", testing:"2314535" , testing1:"234289479", ip:"190.344.213.123" , timestamp:"14:34" , approval:"Approve" }
    ]

    const getTableData = (tableCol, currentPage, rowsPerPage) => {
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
      
        return tableCol.slice(startIndex, endIndex);
      };

      const sortedData = [...tableCol].sort((a, b) => { 
        const valueA = a.descriptions.toLowerCase();
        const valueB = b.descriptions.toLowerCase();
      
        // Sort based on the selected column and order
        if (sortColumn === "Title") {
          return sortOrder === "asc" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
        }
      
        return 0;
      });

    const [show, setShow] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showSearchModal, setShowSearchModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [showSelectedSearch, setShowSelectedSearch] = useState(false);
    const { theme } = useContext(PartnerContext);
    const tableContainerRef = useRef(null);
    const originalTableCol = useRef([...tableCol]);
    const [currentData, setCurrentData] = useState(
        getTableData(originalTableCol.current, currentPage, rowsPerPage)
    );


    const handleInputChange = (key, value) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [key]: value,
        }));
      };

    const handleExport = {

    };

    const handleAddInputChange = (key, newValue) => {
        setAddFormData((prevAddFormData) => ({
          ...prevAddFormData,
          [key]: newValue,
        }));
      };

      const handleSelectedOptions = (selectedOptions:any) => {
        console.log("Selected option:", selectedOptions);
      }


      const handleSearchOptions = (selectedValue:any) => {
        setSearchFormData(selectedValue);
      }

      const handleScrollToTop = () => {
        if (tableContainerRef.current) {
          tableContainerRef.current.scrollTop = 0;
          tableContainerRef.current.scrollLeft = 0;
        }
      };

      const handleReloadPage = () => {
        window.location.reload();
      };

      useEffect(() => {
        const data = getTableData(originalTableCol.current, currentPage, rowsPerPage);
        setCurrentData(data);
      }, [currentPage, rowsPerPage]);

      useEffect(() => {
        handleScrollToTop();
      }, [currentPage]);

    return (
        <PageTemplate>
            
                <header css={V3BrowseScreenSFCss(theme)} className="title">
                    SECURITYWORKS FRAME
                </header>
                {/* <Breadcrumb css={V3BrowseScreenSFCss(theme)} className="breadcrumb" children="" active="Browse"/> */}
            <Container css={V3BrowseScreenSFCss} className="top-panel">
                <ButtonSF 
                    css={V3BrowseScreenSFCss}
                    className="searchbutton"
                    label={"Search By"}
                    iconRight={<Search css={V3BrowseScreenSFCss} className="search-icon"/>} 
                    onClick={()=>{ setShowSearchModal(true)}}                
                />

                <DropdownCheckboxSF
                    css={DropdownSFCss(theme)}
                    onSelect={handleSelectedOptions}
                    label="Show/ Hide Column"
                    icon={<EyeFill/>}
                    className="filterdropdown" 
                    options={filterOptions} 
                    disabled={false}
                />

                <ButtonSF
                    label="Filter"
                    iconLeft={<FunnelFill/>}
                    onClick={() => { setShow(true) }}
                    css={V3BrowseScreenSFCss}
                    className="filterbutton"
                />

                <ButtonSF 
                    label={""}
                    iconLeft={<ArrowClockwise/>} 
                    onClick={handleReloadPage}
                    css={V3BrowseScreenSFCss}
                    className="reloadbutton"                
                />
                {/* <AdvancedInput
                    css={V3BrowseScreenSFCss(theme)}
                    className="searchbar"
                    placeholder="Seach Here"
                    value={pwd}
                    leftIcon={<Search />}
                    onChange={(e) => { setPwd(e) }}
                /> */}

            
            </Container>

            <Container 
                css={TableSFCss}
                className="container-margin"
            >
            <TableSF
                tableContainerRef={tableContainerRef}
                css={V3BrowseScreenSFCss(theme)}
                className="bodymargin"
                columns={tableTitles}
                data={currentData}
            />
            </Container>
            
            <Container css={V3BrowseScreenSFCss} className="container-page">
                <Pagination
                    dataRendered={currentPage}
                    setDataRendered={(page) => {
                    setCurrentPage(page);
                    handleScrollToTop(); // Call the scroll function when pagination changes
                    }}
                    totalPages={Math.ceil(tableCol.length / rowsPerPage)}
                    maxPageShown={5}
                />

                <Dropdown css={V3BrowseScreenSFCss} className="container-dropdown">
                <select value={rowsPerPage} onChange={(e) => setRowsPerPage(parseInt(e.target.value))}>
                    <option value={5}>5 rows</option>
                    <option value={10}>10 rows</option>
                    <option value={15}>15 rows</option>
                </select>
                </Dropdown>

                <ButtonSF 
                    label={"Export"} 
                    onClick={() => handleExport}     
                    className="export-button"
                    css={V3BrowseScreenSFCss} 
                />
            </Container>

            <ModalFilterSF
                show={show}
                setShow={setShow}
                headerTitle="Filter🔍"
                css={ModalFilterSFCss(theme)}
                className="modal-search"
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
                                type={  value === "Date" ? "date" : undefined || 
                                        value === "Amount" ? "number" : undefined || 
                                        value === "Time" ? "time" : undefined}
                                
                            />
                        </Container>
                    ))}
                </form>
            </ModalFilterSF>

            <ModalSearchSF 
                show={showSearchModal}   
                setShow={setShowSearchModal}
                headerTitle="Choose field to search by"
                css={ModalSearchSFCss}
                formData={searchFormData}
                className="modal-search"
                onBack={()=>setShowSearchModal(false)}
                onProceed={()=>setShowSelectedSearch(true)}
                selecteddata={selectedOptions}
                handleselectedoption={handleSearchOptions}
            >
                <Container >
                <CheckboxSF 
                    options={filterOptions} 
                    disabled={false} 
                    onSelect={(value) => handleSearchOptions(value)}/>
                </Container>
            </ModalSearchSF>

            <ModalSearchSF 
                show={showSelectedSearch} 
                setShow={setShowSelectedSearch}
                css={ModalSearchSFCss(theme)}
                className="modal-selected"
                onBack={()=>setShowSelectedSearch(false)}
                headerTitle="Search by"
                formData={searchFormData}
                selecteddata={setSelectedOptions}
                handleselectedoption={handleSearchOptions}
            >
                <form>
                {filterOptions
            //.filter((key) => selectedOptions.includes(key.value))
            .map(({ key, value, icon }) => (
              <Container key={key}>
                <InputSF
                  label={value.toString()}
                  value={searchFormData[value]}
                  iconLeft={icon}
                  className="input-field"
                  onChange={(newValue) => handleAddInputChange(key, newValue)}
                  type={
                    value === "Date" ? "date" : undefined ||
                    value === "Amount" ? "number" : undefined ||
                    value === "Time" ? "time" : undefined
                  }
                />
              </Container>
            ))}
                </form>
            </ModalSearchSF>


            <ModalAddSF
                show={showAddModal}
                setShow={setShowAddModal}
                headerTitle="Add Record ➕"
                css={ModalAddSFCss(theme)}
                className="modal-add"
                onBack={()=>{setShowAddModal(false)}}
                onProceed={() => {setShowConfirmModal(true)}}
                formData={addFormData}
                handleInputChange={handleAddInputChange}
            >
                <form
                >
                    {/* Display form fields for adding */}
                    {filterOptions.map(({ key, value, icon }) => (
                        <Container key={key}>
                            <InputSF
                                label={value.toString()}
                                value={addFormData[key] || ""}
                                iconLeft={icon}
                                className="input-field"
                                onChange={(newValue) => handleAddInputChange(key, newValue)}
                                type={  value === "Date" ? "date" : undefined || 
                                        value === "Amount" ? "number" : undefined ||
                                        value === "Time" ? "time" : undefined}
                                required={true}
                            />
                        </Container>
                    ))}
                </form>
            </ModalAddSF>

            <ModalConfirmSF 
                show={showConfirmModal} 
                setShow={setShowConfirmModal}
                headerTitle="Add Record Confirmation"
                css={ModalConfirmSFCss(theme)}
                className="modal-confirm"
                formData={addFormData}
                handleInputChange={handleAddInputChange}
                onBack={()=>{setShowConfirmModal(false)}}
                >
                <form
                >
                    {/* Display form fields for adding */}
                    {filterOptions.map(({ key, value, icon }) => (
                        <Container key={key}>
                            <InputSF
                                label={value.toString()}
                                value={addFormData[key] || ""}
                                iconLeft={icon}
                                className="input-field"
                                onChange={(newValue) => handleAddInputChange(key, newValue)}
                                type={  value === "Date" ? "date" : undefined || 
                                        value === "Amount" ? "number" : undefined ||
                                        value === "Time" ? "time" : undefined}
                                readOnly={true}
                            />
                        </Container>
                    ))}
                </form>
            </ModalConfirmSF>

            <PlusCircle 
                css={V3BrowseScreenSFCss} 
                className="pluscircle"
                onClick={()=>{setShowAddModal(true)}}
            />
            
            <footer css={V3BrowseScreenSFCss} className="footerfnx">
                <Text
                    label="© 2000 – 2023 FINEXUS Group"
                />
            </footer>

        </PageTemplate>
    );
};

export default V3BrowseScreenSF;
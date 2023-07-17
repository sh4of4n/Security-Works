/** @jsxImportSource @emotion/react */

import {
    Alarm,
    CalendarDate,
    Cash,
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
import React, { SetStateAction, useContext, useState } from "react";
import { PartnerContext } from "contexts/PartnerContext";
import { Container, Dropdown } from "react-bootstrap";
import V2BrowseScreenSFCss from "styles/V2-ShaoFan/V2BrowseScreenSFCss";
import AdvancedInput from "components/AdvancedInput";
import ButtonSF from "styles/V2-ShaoFan/ButtonSF";
import Pagination from "components/Pagination";
import TableSF from "styles/V2-ShaoFan/TableSF";
import ModalFilterSF from "styles/V2-ShaoFan/ModalFilterSF";
import ModalFilterSFCss from "styles/V2-ShaoFan/ModalFilterSFCss";
import InputSF from "styles/V2-ShaoFan/InputSF";
import ModalAddSF from "styles/V2-ShaoFan/ModalAddSF";
import ModalAddSFCss from "styles/V2-ShaoFan/ModalAddSFCss";
import ModalConfirmSF from "styles/V2-ShaoFan/ModalConfirmSF";
import ModalConfirmSFCss from "styles/V2-ShaoFan/ModalConfirmSFCss";
import DropdownCheckboxSF from "styles/V2-ShaoFan/DropdownCheckboxSF";
import DropdownSFCss from "styles/V2-ShaoFan/DropdownSFCss";
import ModalSearchSF from "styles/V2-ShaoFan/ModalSearchSF";
import ModalSearchSFCss from "styles/V2-ShaoFan/ModalSearchSFCss";
import Checkbox from "components/Checkbox";
import CheckboxSF from "styles/V2-ShaoFan/CheckboxSF";


const V2BrowseScreenSF = () => {

    const [pwd, setPwd] = useState("");

    const [sortOrder, setSortOrder] = useState("asc");
    const [formData, setFormData] = useState({});
    const [selectedData, setSelectedData] = useState({});
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
    ]

    const tableCol = [ // todo - testing purpose, to delete in the future
        { descriptions: "Bali, Selangor, MYS", date: "03/08/2022", time: "12.52", amount: "+ RM923.00", test: "- RM7.00", try: "testtt" },
        { descriptions: "Transfer", date: "25/03/2022", time: "02.12", amount: "+ RM10.00", test: "- RM7.00", try: "testtt" },
        { descriptions: "Pahang, MYS", date: "30/12/2021", time: "08.32", amount: "- RM120.00", test: "- RM7.00", try: "testtt" },
        { descriptions: "Finexus Cafe W.Persekutuan, MYS", date: "16/11/2022", time: "11.02", amount: "- RM7.00", test: "- RM7.00", try: "testtt" },
        { descriptions: "Reload - FPX, MYS", date: "10/11/2022", time: "10.12", amount: "+ RM1000.00", test: "- RM7.00", try: "testtt" },
        { descriptions: "Ole-Ole Bali, Selangor, MYS", date: "03/08/2022", time: "12.52", amount: "+ RM923.00", test: "- RM7.00", try: "testtt" },
        { descriptions: "Transfer - DuitNow", date: "25/03/2022", time: "02.12", amount: "+ RM10.00", test: "- RM7.00", try: "testtt" },
        { descriptions: "Converse, Pahang, MYS", date: "30/12/2021", time: "08.32", amount: "- RM120.00", test: "- RM7.00", try: "testtt" },
        { descriptions: " MYS", date: "16/11/2022", time: "11.02", amount: "- RM7.00", test: "- RM7.00", try: "testtt" },
        { descriptions: " FPX, MYS", date: "10/11/2022", time: "10.12", amount: "+ RM1000.00", test: "- RM7.00", try: "testtt" },
        { descriptions: "Bali, Selangor, MYS", date: "03/08/2022", time: "12.52", amount: "+ RM923.00", test: "- RM7.00", try: "testtt" },
        { descriptions: "Transfer", date: "25/03/2022", time: "02.12", amount: "+ RM10.00", test: "- RM7.00", try: "testtt" },
        { descriptions: "Bali, Selangor, MYS", date: "03/08/2022", time: "12.52", amount: "+ RM923.00", test: "- RM7.00", try: "testtt" },
        { descriptions: "Transfer", date: "25/03/2022", time: "02.12", amount: "+ RM10.00", test: "- RM7.00", try: "testtt" },
        { descriptions: "Pahang, MYS", date: "30/12/2021", time: "08.32", amount: "- RM120.00", test: "- RM7.00", try: "testtt" },
        { descriptions: "Finexus Cafe W.Persekutuan, MYS", date: "16/11/2022", time: "11.02", amount: "- RM7.00", test: "- RM7.00", try: "testtt" },
        { descriptions: "Reload - FPX, MYS", date: "10/11/2022", time: "10.12", amount: "+ RM1000.00", test: "- RM7.00", try: "testtt" },
        { descriptions: "Ole-Ole Bali, Selangor, MYS", date: "03/08/2022", time: "12.52", amount: "+ RM923.00", test: "- RM7.00", try: "testtt" },
        { descriptions: "Transfer - DuitNow", date: "25/03/2022", time: "02.12", amount: "+ RM10.00", test: "- RM7.00", try: "testtt" },
        { descriptions: "Converse, Pahang, MYS", date: "30/12/2021", time: "08.32", amount: "- RM120.00", test: "- RM7.00", try: "testtt" },
        { descriptions: " MYS", date: "16/11/2022", time: "11.02", amount: "- RM7.00", test: "- RM7.00", try: "testtt" },
        { descriptions: " FPX, MYS", date: "10/11/2022", time: "10.12", amount: "+ RM1000.00", test: "- RM7.00", try: "testtt" },
        { descriptions: "Bali, Selangor, MYS", date: "03/08/2022", time: "12.52", amount: "+ RM923.00", test: "- RM7.00", try: "testtt" },
        { descriptions: "Transfer", date: "25/03/2022", time: "02.12", amount: "+ RM10.00", test: "- RM7.00", try: "testtt" },
        { descriptions: "Pahang, MYS", date: "30/12/2021", time: "08.32", amount: "- RM120.00", test: "- RM7.00", try: "testtt" }
    ]

    const getTableData = (tableCol, currentPage, rowsPerPage) => {
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
      
        return tableCol.slice(startIndex, endIndex);
      };

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
    const [showAddModal, setShowAddModal] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showSearchModal, setShowSearchModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [showSelectedSearch, setShowSelectedSearch] = useState(false);
    const { theme } = useContext(PartnerContext);


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

      const handleSelectedOptions = (selectedValue:any) => {
        console.log("Selected option:", selectedValue);
      }


      const handleSearchOptions = (selectedOptions:any) => {
        setSelectedData(selectedOptions);
      }
    return (
        <PageTemplate>
            <Container>
                <header css={V2BrowseScreenSFCss(theme)} className="title">
                    SECURITYWORKS FRAME
                </header>
                {/* <Breadcrumb css={V2BrowseScreenSFCss(theme)} className="breadcrumb" children="" active="Browse"/> */}
                <ButtonSF 
                    css={V2BrowseScreenSFCss}
                    className="searchbutton"
                    label={"Search By"}
                    iconRight={<Search css={V2BrowseScreenSFCss} className="search-icon"/>} 
                    onClick={()=>{ setShowSearchModal(true)}}                
                />

                <DropdownCheckboxSF
                    css={DropdownSFCss(theme)}
                    onSelect={handleSelectedOptions}
                    label="Filter Column by"
                    icon={<FunnelFill/>}
                    className="filterdropdown" 
                    options={filterOptions} 
                    disabled={false}
                />

                <ButtonSF
                    label="Filter"
                    iconLeft={<Filter />}
                    onClick={() => { setShow(true) }}
                    css={V2BrowseScreenSFCss}
                    className="filterbutton"
                />
                {/* <AdvancedInput
                    css={V2BrowseScreenSFCss(theme)}
                    className="searchbar"
                    placeholder="Seach Here"
                    value={pwd}
                    leftIcon={<Search />}
                    onChange={(e) => { setPwd(e) }}
                /> */}

            
            </Container>

            <TableSF
                css={V2BrowseScreenSFCss(theme)}
                className="bodymargin"
                columns={tableTitles}
                data={getTableData(tableCol, currentPage, rowsPerPage)}
            />

            <Container css={V2BrowseScreenSFCss} className="container-page">
                <Pagination
                    dataRendered={currentPage}
                    setDataRendered={setCurrentPage}
                    totalPages={Math.ceil(tableCol.length / rowsPerPage)}
                    maxPageShown={5}
                />

                <Dropdown css={V2BrowseScreenSFCss} className="container-dropdown">
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
                    css={V2BrowseScreenSFCss} 
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
                className="modal-search"
                onBack={()=>setShowSearchModal(false)}
                onProceed={()=>setShowSelectedSearch(true)}
                selectedData={selectedData}
                handleSelectedOption={handleSearchOptions}
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
                onBack={()=>setShowSearchModal(true)}
                headerTitle="Search by"
                selectedData={selectedData}
                handleSelectedOption={handleSearchOptions}
            >
                <form>
                {filterOptions
            //.filter((option) => selectedData.includes(option.value))
            .map(({ key, value, icon }) => (
              <Container key={key}>
                <InputSF
                  label={value.toString()}
                  value={addFormData[key] || ""}
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
                css={V2BrowseScreenSFCss} 
                className="pluscircle"
                onClick={()=>{setShowAddModal(true)}}
            />
            
            <footer css={V2BrowseScreenSFCss} className="footerfnx">
                <Text
                    label="© 2000 – 2023 FINEXUS Group"
                />
            </footer>

        </PageTemplate>
    );
};

export default V2BrowseScreenSF;
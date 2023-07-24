/** @jsxImportSource @emotion/react */
import Input from "components/Input";
import Table, { getTableData } from "components/Table";
import React, { useContext, useRef, useState } from "react";
import Text from "components/Text";
import AdvancedInput from "components/AdvancedInput";
import { Check2, ChevronBarDown, Search } from "react-bootstrap-icons";
import Button from "components/Button";
import Panel from "components/Panel";
import Modal from "components/Modal";
import Checkbox from "components/Checkbox";
import Radio from "components/Radio";
import Breadcrumb from "components/Breadcrumb";
import Pagination from "components/Pagination";
import { Container } from "react-bootstrap";
import PageTemplate from "components/PageTemplate";
import Select from "components/Select";
import Dropdown from "components/Dropdown";
import { PartnerContext } from "contexts/PartnerContext";

const Playground = () => {
  const [pwd, setPwd] = useState("");
  const {theme} = useContext(PartnerContext);
  
  const tableTitles = [
    {key: "0", label:<><Text label="Title"/> <Check2/></>},
    {key: "1", label:"title2"},
    {key: "2", label:"title3"},
    {key: "3", label:"title4"},
    {key: "4", label:"title5"},
    {key: "5", label:"title5"},
    {key: "6", label:""},
  ]

  const tableCol = [ // todo - testing purpose, to delete in the future
  { descriptions: "Bali, Selangor, MYS", date: "03/08/2022", time: "12.52", amount: "+ RM923.00", test: "- RM7.00", try:"testtt", icon: <Check2/> },
  { descriptions: "Transfer", date: "25/03/2022", time: "02.12", amount: "+ RM10.00", test: "- RM7.00", try:"testtt" },
  { descriptions: "Pahang, MYS", date: "30/12/2021", time: "08.32", amount: "- RM120.00", test: "- RM7.00", try:"testtt" },
  { descriptions: "Finexus Cafe W.Persekutuan, MYS", date: "16/11/2022", time: "11.02", amount: "- RM7.00", test: "- RM7.00", try:"testtt" },
  { descriptions: "Reload - FPX, MYS", date: "10/11/2022", time: "10.12", amount: "+ RM1000.00", test: "- RM7.00", try:"testtt" },
  { descriptions: "Ole-Ole Bali, Selangor, MYS", date: "03/08/2022", time: "12.52", amount: "+ RM923.00", test: "- RM7.00", try:"testtt" },
  { descriptions: "Transfer - DuitNow", date: "25/03/2022", time: "02.12", amount: "+ RM10.00", test: "- RM7.00", try:"testtt" },
  { descriptions: "Converse, Pahang, MYS", date: "30/12/2021", time: "08.32", amount: "- RM120.00", test: "- RM7.00", try:"testtt" },
  { descriptions: " MYS", date: "16/11/2022", time: "11.02", amount: "- RM7.00", test: "- RM7.00", try:"testtt" },
  { descriptions: " FPX, MYS", date: "10/11/2022", time: "10.12", amount: "+ RM1000.00", test: "- RM7.00", try:"testtt" },
  { descriptions: "Bali, Selangor, MYS", date: "03/08/2022", time: "12.52", amount: "+ RM923.00", test: "- RM7.00", try:"testtt" },
  { descriptions: "Transfer", date: "25/03/2022", time: "02.12", amount: "+ RM10.00", test: "- RM7.00", try:"testtt" },
  { descriptions: "Bali, Selangor, MYS", date: "03/08/2022", time: "12.52", amount: "+ RM923.00", test: "- RM7.00", try:"testtt" },
  { descriptions: "Transfer", date: "25/03/2022", time: "02.12", amount: "+ RM10.00", test: "- RM7.00", try:"testtt" },
  { descriptions: "Pahang, MYS", date: "30/12/2021", time: "08.32", amount: "- RM120.00", test: "- RM7.00", try:"testtt" },
  { descriptions: "Finexus Cafe W.Persekutuan, MYS", date: "16/11/2022", time: "11.02", amount: "- RM7.00", test: "- RM7.00", try:"testtt" },
  { descriptions: "Reload - FPX, MYS", date: "10/11/2022", time: "10.12", amount: "+ RM1000.00", test: "- RM7.00", try:"testtt" },
  { descriptions: "Ole-Ole Bali, Selangor, MYS", date: "03/08/2022", time: "12.52", amount: "+ RM923.00", test: "- RM7.00", try:"testtt" },
  { descriptions: "Transfer - DuitNow", date: "25/03/2022", time: "02.12", amount: "+ RM10.00", test: "- RM7.00", try:"testtt" },
  { descriptions: "Converse, Pahang, MYS", date: "30/12/2021", time: "08.32", amount: "- RM120.00", test: "- RM7.00", try:"testtt" },
  { descriptions: " MYS", date: "16/11/2022", time: "11.02", amount: "- RM7.00", test: "- RM7.00", try:"testtt" },
  { descriptions: " FPX, MYS", date: "10/11/2022", time: "10.12", amount: "+ RM1000.00", test: "- RM7.00", try:"testtt" },
  { descriptions: "Bali, Selangor, MYS", date: "03/08/2022", time: "12.52", amount: "+ RM923.00", test: "- RM7.00", try:"testtt" },
  { descriptions: "Transfer", date: "25/03/2022", time: "02.12", amount: "+ RM10.00", test: "- RM7.00", try:"testtt" },
  { descriptions: "Pahang, MYS", date: "30/12/2021", time: "08.32", amount: "- RM120.00", test: "- RM7.00", try:"testtt" }
]

  const [show, setShow] = useState(false);
  const [value, setValue] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [search, setSearch] = useState("");

  const handleCheckbox = (value) => {
    setShow(value);
  }

  return (
    <PageTemplate>
      <Container>
        <header>
        SECURITYWORKS FRAME

        </header>

        <Input 
          label="input"
          value={pwd}
          // disabled
          onChange={(value) => setPwd(value)}
          className="input-ctn pt-3"
          type="text"
        />

        <Text
          label="text"
          onClick={() =>{}}
        />

        <AdvancedInput
          label="AdvancedInput"
          value={pwd}
          leftIcon={<Check2/>}
          rightIcon={<Check2/>}
          onChange={(e) => {setPwd(e)}}
          mask
        />
        
        <Panel>
          <Button
            label="Button"
            onClick={() => {setShow(true)}}
          />
        </Panel>

        <Modal 
          show={show}
          setShow={setShow}
          // onProceed={()=>{}}
        >
        </Modal>

        <Checkbox
          label="Hii"
          value={show}
          onClick={handleCheckbox}
        />

        <Radio
          label="Hii"
          value={show}
          onClick={setShow}
        />

        <Breadcrumb children="Login" active="Playground"/>

        <Select 
          value={value} 
          label="Select Component"
          options={[{key:"1", value:"Data1"},{key:"2", value:"Data2"},{key:"3", value:"Data3"}]} 
          onSelect={(value1) => {
            console.log(value1);
            setValue(value1); 
          }}          
        />

          <Dropdown
            label={
              <span>
                <Search /> Advanced Filter
              </span>
            }
            //css={DropdownCss()}
            className="dropdown"
            options={[{key:"1", value:"Data1"},{key:"2", value:"Data2"},{key:"3", value:"Data3"}]}
          >
            <form>
              <Input
                label="Title"
                value={search}
                onChange={(e) => {
                  setSearch(e);
                  console.log(e);
                }}
                className="input-field"
              ></Input>

              <Input
                label="Title"
                value={search}
                onChange={(e) => {
                  setSearch(e);
                }}
                className="input-field"
              ></Input>
            </form>

            <form>
              <Input
                label="Title"
                value={search}
                onChange={(e) => {
                  setSearch(e);
                  console.log(e);
                }}
                className="input-field"
              ></Input>

              <Input
                label="Title"
                value={search}
                onChange={(e) => {
                  setSearch(e);
                }}
                className="input-field"
              ></Input>
            </form>
            <form>
              <Input
                label="Title"
                value={search}
                onChange={(e) => {
                  setSearch(e);
                  console.log(e);
                }}
                className="input-field"
              ></Input>

              <Input
                label="Title"
                value={search}
                onChange={(e) => {
                  setSearch(e);
                }}
                className="input-field"
              ></Input>
            </form>

            <form>
              <Select
                label="Title"
                value=""
                options={[{key:"1", value:"Data1"},{key:"2", value:"Data2"},{key:"3", value:"Data3"}]}
                onSelect={() => []}
                className="select-field"
              ></Select>
              <Select
                label="Title"
                value=""
                options={[{key:"1", value:"Data1"},{key:"2", value:"Data2"},{key:"3", value:"Data3"}]}
                onSelect={() => []}
                className="select-field"
              ></Select>
            </form>
          </Dropdown>

        {/* <Table 
          title="Test" 
          columns={tableTitles} 
          data={getTableData(tableCol, currentPage, rowsPerPage)}
          dropdownOptions={false} 
        /> */}

        <Button
          label="Button"
          onClick={()=>{}}
          iconLeft={<ChevronBarDown/>}
        />

        <Pagination
          dataRendered={currentPage}
          setDataRendered={setCurrentPage}
          totalPages={Math.ceil(tableCol.length/rowsPerPage)}
          maxPageShown={5}
          className="text-center"
        />
      </Container>
    </PageTemplate>
  );
};

export default Playground;

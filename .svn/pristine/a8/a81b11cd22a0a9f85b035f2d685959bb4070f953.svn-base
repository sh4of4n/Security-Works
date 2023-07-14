/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
15/06/2023            SawYN     1.0.0           - Create Query component

*/

import { useQuery } from "@apollo/client";
// import InfoModal from "components/InfoModal";
// import { LoadingContext } from "contexts/LoadingContext";
import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
// import { FETCH_DATAENQQ } from "schema/FETCH_DATAENQ";

interface FetchDataEnquiryProps {
  sqlId: string
  formatted?: boolean
  setValue: Dispatch<SetStateAction<any>>
}

interface FetchDataEnqResult {
  fetchDataEnq: {
    data: any;
  };
}

const FetchDataEnquiry = ({
  sqlId,
  formatted = false,
  setValue,
}: FetchDataEnquiryProps) => {
  const [showError, setShowError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  // const { setLoading } = useContext(LoadingContext);
  // const { data, error } = useQuery<FetchDataEnqResult>(FETCH_DATAENQQ, {
  //   variables: {
  //     id: sqlId,
  //     formatted: formatted
  //   },
  //   fetchPolicy: "network-only"
  // });

  // useEffect(() => {
  //   setLoading(true);
  // }, []);

  // useEffect(() => {
  //   if (error) {
  //     setShowError(true);
  //     setMessage(error.message);
  //   }
  // }, [error]);

  // useEffect(() => {
  //   if (data) {
  //     if (formatted) {
  //       setValue(data.fetchDataEnq.data);
  //     } else {
  //       setValue(data.fetchDataEnq.data.data);
  //     }
  //     // setLoading(false);
  //   }
  // }, [data]);


  const onDismissClick = () => {
    setShowError(false);
  }

  return (
    // <InfoModal
    //   show={showError}
    //   setShow={setShowError}
    //   status="fail"
    //   title="InfoModal|Query|title"
    //   descriptions={message}
    //   buttonLabel="Button|Dismiss"
    //   onClick={onDismissClick}
    // />
    <></>
  )
}

export default FetchDataEnquiry;

/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
19/06/2023            ChongKW    1.0.0           - Create Modal component
*/


import React, { Dispatch, SetStateAction } from "react";
import { Modal as BSModal } from "react-bootstrap";

interface ModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  onBack?:() => void;
  children?: JSX.Element | JSX.Element[];
  className?: string;
  headerTitle?: string;
}

const Modal: React.FC<ModalProps> = ({
  show,
  setShow,
  onBack,
  children,
  className,
  headerTitle,
}) => {

  const onHide = () => {
    setShow(false);
  }

  return (
    <BSModal
      show={show}
      onHide={onHide}
      className={className}
      centered
    >
      <BSModal.Header closeButton>{headerTitle}</BSModal.Header>

      <BSModal.Body>{children}</BSModal.Body>
    </BSModal>
  );
};

export default Modal;

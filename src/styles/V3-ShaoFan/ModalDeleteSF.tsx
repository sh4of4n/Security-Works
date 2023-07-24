

/** @jsxImportSource @emotion/react */
import React, { Dispatch, SetStateAction } from "react";
import { Modal as BSModal } from "react-bootstrap";
import ButtonSF from "styles/V2-ShaoFan/ButtonSF";
import ModalFilterSFCss from "./ModalFilterSFCss";
import ModalDeleteSFCss from "./ModalDeleteSFCss";

interface ModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  onProceed?:() => void;
  onBack?:() => void;
  children?: JSX.Element | JSX.Element[];
  className?: string;
  headerTitle?: string;
}

const ModalDeleteSF: React.FC<ModalProps> = ({
  show,
  setShow,
  onProceed,
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

      <BSModal.Footer>
        <ButtonSF label="Back" onClick={onBack}/>
        <ButtonSF label="Delete" css={ModalDeleteSFCss} className="delete-button" onClick={onProceed}/>
      </BSModal.Footer>
    </BSModal>
  );
};

export default ModalDeleteSF;

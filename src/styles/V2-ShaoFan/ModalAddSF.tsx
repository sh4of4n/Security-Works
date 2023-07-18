

/** @jsxImportSource @emotion/react */
import React, { Dispatch, SetStateAction } from "react";
import { Modal as BSModal } from "react-bootstrap";
import ButtonSF from "styles/V2-ShaoFan/ButtonSF";
import ModalFilterSFCss from "./ModalFilterSFCss";
import ModalAddSFCss from "./ModalAddSFCss";

interface ModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  onProceed?:() => void;
  onBack?:() => void;
  children?: JSX.Element | JSX.Element[];
  className?: string;
  headerTitle?: string;
  formData?: object;
  handleInputChange?: (key: string, newValue: string) => void;
}

const ModalAddSF: React.FC<ModalProps> = ({
  show,
  setShow,
  onProceed,
  onBack,
  children,
  className,
  headerTitle,
  formData,
  handleInputChange,
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
      formData={formData}
      handleInputChange={handleInputChange}
    >
      <BSModal.Header closeButton>{headerTitle}</BSModal.Header>

      <BSModal.Body>{children}</BSModal.Body>

      <BSModal.Footer>
        <ButtonSF label="Back" onClick={onBack}/>
        <ButtonSF label="Submit" css={ModalAddSFCss} className="add-button" onClick={onProceed}/>
      </BSModal.Footer>
    </BSModal>
  );
};

export default ModalAddSF;

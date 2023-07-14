/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
16/06/2023            ChongKW    1.0.0           - Create Text component
*/

/** @jsxImportSource @emotion/react */
import { PartnerContext } from "contexts/PartnerContext";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import TextCss from "styles/components/TextCss";

interface TextProps {
  label: string
  onClick?: () => void
  skipTranslate?: boolean
  className?: string
}

const Text = ({
  label,
  onClick,
  skipTranslate = false,
  className
}: TextProps) => {
  const { t } = useTranslation();
  const { theme } = useContext(PartnerContext);

  return (
    <span
      css={TextCss(theme)}
      onClick={onClick}
      className={`${className} ${!!onClick ? "hover" : ""}`}
    >
      {skipTranslate ? label : t(label)}
    </span>
  );
};

export default Text;

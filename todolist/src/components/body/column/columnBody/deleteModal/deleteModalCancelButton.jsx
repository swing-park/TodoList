import React from "react";
import {
  ButtonNormal,
  ButtonNormalText,
} from "../../../../icons/button-normal.jsx";

const DeleteModalCancelButton = ({ handleModalFlag }) => {
  return (
    <ButtonNormal onClick={handleModalFlag}>
      <ButtonNormalText>취소</ButtonNormalText>
    </ButtonNormal>
  );
};

export default DeleteModalCancelButton;

import React, { useState } from "react";
import CardTitle from "./cardTitle.jsx";
import CardContents from "./cardContents.jsx";
import CardAuthor from "./cardAuthor.jsx";
import CardDeleteButton from "./cardDeleteButton.jsx";
import { StaticCardDiv } from "./staticCard.style.jsx";
import CardTextWrapper from "./cardTextWrapper.style";
import ReviseCard from "../revisionCard/reviseCard";

const StaticCard = (props) => {
  const [modified, setModified] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [deleteButtonFlag, setDeleteButtonFlag] = useState(false);
  const [cardStyle, setCardStyle] = useState({
    borderStyle: "none",
    backgroundColor: "#fff",
  });

  const handleModifyFlag = (flag) => {
    setModified(flag);
  };

  const handleRegisterFlag = (flag) => {
    setRegistered(flag);
  };

  const passProps = () => {
    props.getCardData(props);
  };

  const handleDeleteButtonFlag = () => {
    if (deleteButtonFlag) {
      setDeleteButtonFlag(false);
      setCardStyle({
        borderStyle: "none",
        backgroundColor: "#fff",
      });
    } else {
      setDeleteButtonFlag(true);
      setCardStyle({
        borderStyle: "1px solid red",
        backgroundColor: "#ffeeec",
      });
    }
  };

  const defaultCard = (
    <>
      <CardTextWrapper>
        <CardTitle cardTitle={props.cardTitle} />
        <CardContents cardContents={props.cardContents} />
        <CardAuthor user={props.user} />
      </CardTextWrapper>
      <CardDeleteButton
        columnid={props.id}
        cardid={props.cardid}
        deleteCardData={props.deleteCardData}
        handleDeleteButtonFlag={handleDeleteButtonFlag}
        handleModalFlag={props.handleModalFlag}
      />
    </>
  );

  const InnerCard = (props) => {
    if (modified) {
      console.log("hi");
      return (
        <ReviseCard
          cardTitle={props.cardTitle}
          cardContents={props.cardContents}
          user={props.user}
          id={props.id}
          cardid={props.cardid}
          handleModifyFlag={handleModifyFlag}
          handleRegisterFlag={handleRegisterFlag}
          handleDeleteButtonFlag={handleDeleteButtonFlag}
          getColumnData={props.getColumnData}
          handleModifiedCard={props.handleModifiedCard}
          patchModifiedData={props.patchModifiedData}
        />
      );
    }

    return defaultCard;
  };

  return (
    <StaticCardDiv
      cardStyle={cardStyle}
      onDoubleClick={() => {
        handleModifyFlag(true);
        passProps();
      }}
    >
      <InnerCard
        cardTitle={props.cardTitle}
        cardContents={props.cardContents}
        user={props.user}
        id={props.id}
        cardid={props.cardid}
        handleModifyFlag={handleModifyFlag}
        handleDeleteButtonFlag={handleDeleteButtonFlag}
        getColumnData={props.getColumnData}
        handleModifiedCard={props.handleModifiedCard}
        patchModifiedData={props.patchModifiedData}
      />
    </StaticCardDiv>
  );
};

export default StaticCard;

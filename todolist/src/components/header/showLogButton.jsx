import React from 'react';
import styled from 'styled-components';
import { ReactComponent as menuBtn } from './showLogButton.svg';

const MenuBtn = styled(menuBtn)`
  /* position: absolute; */
  width: 24px;
  height: 24px;
  top: 50px;
  right: 100px;
  cursor: pointer;


  position: fixed !important;
  transition: all 0.6s ease-in-out; 
  bottom: 5%;
  right: 5%;
`;

const ShowLogButton = ({renderLoghandler} ) => {
  return (
    <div className="show-log-button-section">
      <MenuBtn className="show-log-button" onClick={renderLoghandler} />
    </div>
  );
};

export default ShowLogButton;

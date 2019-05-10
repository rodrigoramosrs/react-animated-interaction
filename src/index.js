import React, { Component } from "react";
import styled, { css, withTheme } from "styled-components";
import { CSSTransition } from "react-transition-group";
import { PropTypes } from "prop-types";

const MainContainer = styled.div`
  visibility: visible;
  max-width: 350px;
  height: 50px;

  /*margin-left: -125px;*/
  margin: auto;
  background-color: #333;
  color: #fff;
  text-align: center;
  position: fixed;

  z-index: 1;
  left: 0;
  right: 0;
  bottom: 30px;
  font-size: 17px;
  white-space: nowrap;
  border-radius: 24px;
  text-overflow: ellipsis;
`;

const ReactAnimatedInteraction = props => {
  return (
    <CSSTransition
      in={props.Show}
      classNames="_bottom-toaster-transition"
      timeout={0}
      unmountOnExit
    >
      {state => (
        <MainContainer state={state} Show={props.Show}>
          {props.children}
        </MainContainer>
      )}
    </CSSTransition>
  );
};

ReactAnimatedInteraction.propTypes = {
  children: PropTypes.any,
  Icon: PropTypes.any,
  Show: PropTypes.bool
};
export default ReactAnimatedInteraction;

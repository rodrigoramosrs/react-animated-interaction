import React, { Component } from "react";
import styled, { css, withTheme } from "styled-components";
import { CSSTransition } from "react-transition-group";
import { PropTypes } from "prop-types";

const MainContainer = styled.div`
  position: absolute;
  ${props =>
    props.Show &&
    css`
      position: absolute;
      animation: move-to-element 2s, expand 2s 0.5s;
    `};
  ${props =>
    !props.Show &&
    css`
      visibility: visible;
    `};

  ${props =>
    props.state === "exiting" &&
    css`
      visibility: visible;
      --animation: shrink 1.5s 4s, fadeout 0.5s 4.5s;
      animation: shrink 0.5s 0.5s, fadeout 1s 1s;
    `};

  ${props => props.state === "exited" && css``};

  @keyframes move-to-element {
    from {
      top: 0px;
    }
    to {
      top: 500px;
    }
  }

  @keyframes fadein {
    from {
      bottom: 2px;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @keyframes expand {
    from {
      min-width: 50px;
    }
    to {
      min-width: 350px;
    }
  }

  @keyframes stay {
    from {
      min-width: 350px;
    }
    to {
      min-width: 350px;
    }
  }

  @keyframes shrink {
    from {
      min-width: 350px;
    }
    to {
      min-width: 50px;
    }
  }

  @keyframes fadeout {
    from {
      min-width: 50px;
      bottom: 30px;
      opacity: 1;
    }
    to {
      min-width: 50px;
      bottom: 60px;
      opacity: 0;
    }
  }
`;

const ReactAnimatedInteraction = props => {
  return (
    <CSSTransition
      in={props.Show}
      classNames="_bottom-toaster-transition"
      timeout={0}
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

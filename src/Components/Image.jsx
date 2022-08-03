import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from 'react-animations';

const FadeInAnimation = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
  animation: 10s ${FadeInAnimation};
  display: inline;
`;

export default function Image(props) {
    return(
        <FadeInDiv>
        <img className = "img img-thumbnail rounded-0 border border-dark" src = {props.flagSrc} alt={props.flagAlt} />
        </FadeInDiv>
    );
}
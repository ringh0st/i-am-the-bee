import styled from 'styled-components';
import {keyframes} from 'styled-components';

const example = keyframes`
    0%   {left:0; top:0px;}
    10%  {left:10%; top:100px;}
    20%  {left:20%; top:50px;}
    30%  {left:30%; top:200px;}
    40% {left:40%; top:50px;}
    50%   {left:50%; top:0px;}
    60%  {left:60%; top:100px;}
    70%  {left:70%; top:50px;}
    80%  {left:80%; top:200px;}
    90% {left:90%; top:50px;}
    100% {left:100%; top:0px;}

`

export const SpinnerContainer = styled.img`
    display:flex;
    width:70px;
    height: 100%;
    padding-top:200px;
    padding-left:20px;
    padding-right:20px;
    position: relative;
    animation-name: ${example};
    animation-duration: 4s;
`


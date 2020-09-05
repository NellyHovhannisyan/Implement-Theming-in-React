import React from "react";
import AppBar from "@material-ui/core/AppBar";
import styled from "styled-components";

const Div = styled.div`
  & ul {
    list-style-type: none;
    margin: 0;
    padding: 0 35%;
    overflow: hidden;
    background-color: ${(props) => props.bg}!important;

    & li {
      float: left;

      & a {
        display: block;
        color: ${(props) => props.textColor}!important;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }

      & a:hover {
        background-color: #a2a2a2;
      }
    }
  }
`;

function Header({ bg, textColor }) {
  return (
    // <AppBar color="inherit" position="static">
    <Div>
      <ul>
        <li>
          <a href="https://styled-components.com/">Home</a>
        </li>
        <li>
          <a href="https://styled-components.com/">About us</a>
        </li>
        <li>
          <a href="https://styled-components.com/">Contact</a>
        </li>
      </ul>
    </Div>
    // </AppBar>
  );
}

export default Header;

import styled from "styled-components";

export const Div = styled.div`
  & ul {
    list-style-type: none;
    margin: 0;
    padding: 0 35%;
    overflow: hidden;
    background-color: #333;

    & li {
      float: left;

      & a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }

      & a:hover {
        background-color: #111;
      }
    }
  }
`;
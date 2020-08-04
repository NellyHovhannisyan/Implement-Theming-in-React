import React from "react";
import { Div } from "./styled";

function Header() {
  return (
    <Div>
      <ul>
        <li>
          <a href="https://styled-components.com/">Home</a>
        </li>
        <li>
          <a href="https://styled-components.com/">About us</a>{" "}
        </li>
        <li>
          <a href="https://styled-components.com/">Contact</a>t
        </li>
      </ul>
    </Div>
  );
}

export default Header;

import React from "react";

import { Container, MenuLink, Menu, Hamburger } from "./styles";
export function Header() {
  return (
    <>
      <Container>
        <Hamburger />
        <Menu>
          <MenuLink to="/" activeStyle>
            Home
          </MenuLink>
          <MenuLink to="/Jobs" activeStyle>
            Vagas
          </MenuLink>
          <MenuLink to="/Sobre" activeStyle>
            Products
          </MenuLink>
          <MenuLink to="/blog" activeStyle>
            Blog
          </MenuLink>
        </Menu>
      </Container>
    </>
  );
}

import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Container = styled.nav`
  z-index: 14;
  height: 90px;
  display: flex;
  background-color: ${(props) => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const MenuLink = styled(Link)`
  color: ${(props) => props.theme.colors.gray};
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0 2rem;
  height: 100%;
  font-size: 1.4rem;
  cursor: pointer;

  &.active {
    color: ${(props) => props.theme.colors.white};
  }
`;

export const Hamburger = styled(FaBars)`
  display: none;
  color: ${(props) => props.theme.colors.white};

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.9rem;
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -25px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

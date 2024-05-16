import styled from "styled-components";

export const NavbarWrapper = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  z-index: 1000;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  background-color: white;

  .nav-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .logo {
    width: 54px;
    height: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 20px;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.07);
    }
  }

  .menu-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 20px;

    .selected {
      color: #262626 !important;
    }

    .links {
      font-size: 20px !important;
      font-weight: 700 !important;
      position: relative;
      display: block;
      text-transform: uppercase;
      margin: 20px 0;
      padding: 10px 20px;
      text-decoration: none;
      color: #989898;
      font-size: 18px;
      font-weight: 600;
      transition: 0.5s;
      z-index: 1;
      cursor: pointer;

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top: 2px solid #262626;
        border-bottom: 2px solid #262626;
        transform: scaleY(2);
        opacity: 0;
        transition: 0.3s;
        border-radius: 3px;
      }
      &:after {
        content: "";
        position: absolute;
        top: 2px;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #262626;
        transform: scale(0);
        opacity: 0;
        transition: 0.3s;
        z-index: -1;
        border-radius: 3px;
      }
      &:hover {
        color: #fff !important;
        &:before {
          transform: scaleY(1);
          opacity: 1;
        }
        &:after {
          transform: scaleY(1);
          opacity: 1;
        }
      }

      &:active {
        color: purple !important;
      }
    }
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 767px) {
  }
`;

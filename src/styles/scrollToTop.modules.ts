import styled from "styled-components";

export const ScrollWrapper = styled.div`
  button {
    position: fixed;
    bottom: 30px;
    right: 20px;
    border: none;
    background: transparent;
  }

  img {
    width: 60px;
    height: 60px;
    cursor: pointer;
    filter: invert(0%) sepia(1%) saturate(7485%) hue-rotate(342deg)
      brightness(96%) contrast(100%);

    &:hover {
      filter: invert(60%) sepia(12%) saturate(997%) hue-rotate(169deg)
        brightness(89%) contrast(88%);
    }
  }
`;

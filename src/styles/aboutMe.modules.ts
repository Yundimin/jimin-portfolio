import styled from "styled-components";

export const AboutMeWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: white;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  .image-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 80%;
      height: 800px;
      max-width: 600px;
      max-height: 800px;
      border-radius: 20px;
      transition: transform 0.5s ease-in-out;
      &:hover {
        transform: scale(1.02);
      }
    }
  }

  .text-container {
    width: 100%;
    height: 800px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    .text-title {
      margin-top: 60px;
      font-size: 50px;
    }

    .text-box {
      max-width: 680px;
      display: flex;
      flex-direction: column;
      padding: 0 40px 0 10px;

      .text-explain {
        display: flex;
        text-align: start;
        margin-bottom: 15px;
        font-size: 20px;
        overflow-wrap: break-word;
      }
    }
  }
`;

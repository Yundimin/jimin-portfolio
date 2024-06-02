import styled from "styled-components";

export const AboutMeWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 1200px;
  background-color: white;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  .img-text-container {
    display: flex;

    .image-container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;

      img {
        width: 80%;
        height: 600px;
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
      height: 700px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;

      .text-title {
        margin-top: 60px;
        font-size: 50px;
        font-weight: 600;
      }

      .text-box {
        max-width: 680px;
        display: flex;
        flex-direction: column;
        padding: 0 20px;

        .text-explain {
          display: flex;
          text-align: start;
          margin-bottom: 15px;
          font-size: 20px;
          overflow-wrap: break-word;
        }
      }
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    height: fit-content;
    min-height: 800px;

    .img-text-container {
      flex-direction: column;
      .image-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 60%;
          height: 60%;
          border-radius: 20px;
          margin-top: 30px;
        }
      }
      .text-container {
        width: 100%;
        height: fit-content;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;

        .text-title {
          margin-top: 20px;
          font-size: 40px;
        }

        .text-box {
          padding: 20px;

          .text-explain {
            display: flex;
            text-align: start;
            margin-bottom: 15px;
            font-size: 14px;
            overflow-wrap: break-word;
          }
        }
      }
    }
  }
`;

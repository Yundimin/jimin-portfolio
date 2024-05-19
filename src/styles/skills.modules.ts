import styled from "styled-components";

export const SkillsWrapper = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f6ec;
  flex-direction: column;
  padding: 80px;

  .skill-title {
    font-size: 60px;
    font-weight: 700;
  }
  .skill-subtitle {
  }
  .skill-box {
    width: 1200px;
    max-width: 80%;
    height: fit-content;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
    flex-direction: column;

    .front-end-wrapper {
      display: flex;
      border: 1px solid #ededed;
      padding: 20px;
      margin: 10px;
      width: fit-content;
      height: fit-content;
      flex-direction: column;
      border-radius: 10px;

      .front-end-title {
        font-size: 35px;
        font-weight: 600;
        color: #f1c05e;
        margin-bottom: 20px;
        text-decoration: underline;
      }

      .front-end-img-box {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-wrap: wrap;
      }

      img {
        width: 75px;
        height: 75px;
        margin: 5px;
        transition: transform 0.3s ease-in-out;
        &:hover {
          transform: scale(1.07);
        }
      }
    }

    .back-end-wrapper {
      display: flex;
      border: 1px solid #ededed;
      padding: 20px;
      margin: 10px;
      width: fit-content;
      height: fit-content;
      flex-direction: column;
      border-radius: 10px;

      .back-end-title {
        font-size: 35px;
        font-weight: 600;
        color: #f1c05e;
        margin-bottom: 20px;
        text-decoration: underline;
      }

      .back-end-img-box {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-wrap: wrap;
      }

      img {
        width: 75px;
        height: 75px;
        margin: 5px;
        transition: transform 0.3s ease-in-out;
        &:hover {
          transform: scale(1.07);
        }
      }
    }

    .tool-wrapper {
      display: flex;
      border: 1px solid #ededed;
      padding: 20px;
      margin: 10px;
      width: fit-content;
      height: fit-content;
      flex-direction: column;
      border-radius: 10px;

      .tool-title {
        font-size: 35px;
        font-weight: 600;
        color: #f1c05e;
        margin-bottom: 20px;
        text-decoration: underline;
      }

      .tool-img-box {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-wrap: wrap;
      }

      img {
        width: 75px;
        height: 75px;
        margin: 5px;
        transition: transform 0.3s ease-in-out;
        &:hover {
          transform: scale(1.07);
        }
      }
    }

    .community-wrapper {
      display: flex;
      border: 1px solid #ededed;
      padding: 20px;
      margin: 10px;
      width: fit-content;
      height: fit-content;
      flex-direction: column;
      border-radius: 10px;

      .community-title {
        font-size: 35px;
        font-weight: 600;
        color: #f1c05e;
        margin-bottom: 20px;
        text-decoration: underline;
      }

      .community-img-box {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-wrap: wrap;
      }

      img {
        width: fit-content;
        height: 75px;
        margin: 5px;
        transition: transform 0.3s ease-in-out;
        &:hover {
          transform: scale(1.07);
        }
      }
    }

    .mobile-wrapper {
      display: flex;
      border: 1px solid #ededed;
      padding: 20px;
      margin: 10px;
      width: fit-content;
      height: fit-content;
      flex-direction: column;
      border-radius: 10px;

      .mobile-title {
        font-size: 35px;
        font-weight: 600;
        color: #f1c05e;
        margin-bottom: 20px;
        text-decoration: underline;
      }

      .mobile-img-box {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-wrap: wrap;
      }

      img {
        width: 75px;
        height: 75px;
        margin: 5px;
        transition: transform 0.3s ease-in-out;
        &:hover {
          transform: scale(1.07);
        }
      }
    }

    .deployment-wrapper {
      display: flex;
      border: 1px solid #ededed;
      padding: 20px;
      margin: 10px;
      width: fit-content;
      height: fit-content;
      flex-direction: column;
      border-radius: 10px;

      .deployment-title {
        font-size: 35px;
        font-weight: 600;
        color: #f1c05e;
        margin-bottom: 20px;
        text-decoration: underline;
      }

      .deployment-img-box {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-wrap: wrap;
      }

      img {
        width: fit-content;
        height: 75px;
        margin: 5px;
        transition: transform 0.3s ease-in-out;
        &:hover {
          transform: scale(1.07);
        }
      }
    }
  }
`;
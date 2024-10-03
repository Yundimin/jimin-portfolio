import styled from "styled-components";

export const SkillsWrapper = styled.div`
  width: auto;
  height: 100%;
  min-height: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f6ec;
  flex-direction: column;
  padding: 20px;

  .skill-title {
    font-size: 60px;
    font-weight: 700;
    margin: 60px;
  }
  .skill-subtitle {
    font-size: 20px;
    color: #f1c05e;
    margin: 30px;
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
    margin-bottom: 60px;

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
    .tool-community-box {
      display: flex;
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
          height: 75px;
          margin: 5px;
          transition: transform 0.3s ease-in-out;
          &:hover {
            transform: scale(1.07);
          }
        }
      }
    }

    .mobile-deployment-box {
      display: flex;
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
          height: 75px;
          margin: 5px;
          transition: transform 0.3s ease-in-out;
          &:hover {
            transform: scale(1.07);
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    min-height: 1600px;
    .skill-title {
      font-size: 40px;
      margin: 30px;
    }

    .skill-subtitle {
      font-size: 18px;
    }

    .skill-box {
      max-width: 100%;
      .front-end-wrapper {
        .front-end-title {
          font-size: 20px;
        }

        img {
          width: 45px;
          height: 45px;
        }
      }

      .back-end-wrapper {
        .back-end-title {
          font-size: 20px;
        }

        img {
          width: 45px;
          height: 45px;
        }
      }
      .tool-community-box {
        .tool-wrapper {
          .tool-title {
            font-size: 20px;
          }

          img {
            width: 45px;
            height: 45px;
          }
        }

        .community-wrapper {
          .community-title {
            font-size: 20px;
          }

          img {
            height: 45px;
          }
        }
      }
      .mobile-deployment-box {
        .mobile-wrapper {
          .mobile-title {
            font-size: 20px;
          }

          img {
            width: 45px;
            height: 45px;
          }
        }

        .deployment-wrapper {
          .deployment-title {
            font-size: 20px;
          }

          img {
            height: 45px;
          }
        }
      }
    }
  }

  @media (max-width: 365px) {
    .skill-box {
      .tool-community-box {
        flex-direction: column;
        .tool-wrapper {
          .tool-title {
            font-size: 20px;
          }

          img {
            width: 45px;
            height: 45px;
          }
        }

        .community-wrapper {
          display: flex;
          .community-title {
            font-size: 20px;
          }

          .community-img-box {
            flex-direction: column;
          }

          img {
            width: fit-content;
            height: 45px;
          }
        }
      }
      .mobile-deployment-box {
        flex-direction: column;
        .mobile-wrapper {
          .mobile-title {
            font-size: 20px;
          }

          img {
            width: 45px;
            height: 45px;
          }
        }

        .deployment-wrapper {
          .deployment-title {
            font-size: 20px;
          }

          img {
            width: fit-content;
            height: 45px;
          }
        }
      }
    }
  }
`;

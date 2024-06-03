import styled from "styled-components";

export const ArchivingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 1400px;
  background-color: #121212;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title {
    font-size: 60px;
    font-weight: 700;
    margin: 50px;
    color: #ffffff;
  }

  .archiving-container {
    width: 80%;
    max-width: 1000px;
    height: fit-content;
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: space-between;

    .github-container {
      border-radius: 20px;
      width: 100%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      background-color: #ffffff;

      img {
        width: 200px;
        height: 80px;
      }

      a {
        font-size: 20px;
        text-decoration: none;
        margin: 10px 15px 20px 15px;
      }

      .github-title {
        margin: 15px;
        font-size: 20px;
        font-weight: 500;
      }

      ul {
        margin: 10px;

        li {
          font-size: 18px;
          margin-bottom: 10px;
        }
      }
    }

    .tstory-container {
      border-radius: 20px;
      width: 100%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      background-color: #ffffff;

      img {
        margin: 5px 5px 5px 10px;
        width: 200px;
        height: 60px;
      }

      a {
        font-size: 20px;
        text-decoration: none;
        margin: 10px 15px 20px 15px;
      }

      .tstory-title {
        margin: 15px;
        font-size: 20px;
        font-weight: 500;
      }

      ul {
        margin: 10px;

        li {
          font-size: 18px;
          margin-bottom: 10px;
        }
      }
    }
  }

  .portfolio-container {
    border-radius: 20px;
    margin: 30px 10px;
    width: 80%;
    max-width: 1000px;
    height: fit-content;
    background-color: #ffffff;
    justify-content: space-between;
    display: flex;
    flex-direction: column;

    .portfolio-title {
      display: flex;
      padding: 35px;
    }

    img {
      width: 60px;
      height: 60px;
    }

    .title-text {
      margin-left: 20px;
      font-size: 60px;
      font-weight: 600;
    }

    .portfolio-text-box {
      margin-bottom: 30px;
      margin-left: 30px;
      display: flex;
      flex-direction: column;

      .portfolio-text {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
  }

  @media (max-width: 767px) {
    .title {
      font-size: 40px;
    }
    .archiving-container {
      padding: 10px;
      width: auto;
      flex-direction: column;
      gap: 30px;

      .github-container {
        width: auto;
        img {
          width: 150px;
          height: 60px;
        }

        a {
          font-size: 18px;
          margin: 10px 15px 20px 15px;
        }

        .github-title {
          margin: 15px;
          font-size: 18px;
        }

        ul {
          margin: 10px;

          li {
            font-size: 16px;
            margin-bottom: 10px;
          }
        }
      }

      .tstory-container {
        width: auto;
        img {
          width: 150px;
          height: 45px;
        }

        a {
          font-size: 18px;
          text-decoration: none;
          margin: 10px 15px 20px 15px;
        }

        .tstory-title {
          margin: 15px;
          font-size: 18px;
          font-weight: 500;
        }

        ul {
          margin: 10px;

          li {
            font-size: 16px;
            margin-bottom: 10px;
          }
        }
      }
    }

    .portfolio-container {
      width: auto;
      .portfolio-title {
        display: flex;
        padding: 35px;
        flex-direction: column;

        img {
          width: 40px;
          height: 40px;
        }
      }

      .title-text {
        margin-left: 0;
        margin-top: 10px;
        font-size: 40px;
        font-weight: 600;
      }

      .portfolio-text-box {
        margin: 0 30px 30px 30px;
        display: flex;
        flex-direction: column;

        .portfolio-text {
          font-size: 16px;
          margin-bottom: 10px;
        }
      }
    }
  }
`;

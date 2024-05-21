import styled, { keyframes } from "styled-components";

export const ArchivingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
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
    width: 1000px;
    max-width: 1000px;
    height: 350px;
    display: flex;
    flex-direction: row;
    gap: 50px;

    .github-container {
      border-radius: 20px;
      width: 100%;
      height: 350px;
      display: flex;
      flex-direction: column;
      background-color: #ffffff;

      img {
        margin-left: 30px;
        width: 200px;
        height: 80px;
        margin-top: 35px;
      }

      a {
        margin-left: 30px;
        font-size: 20px;
        text-decoration: none;
      }

      .github-title {
        margin-left: 30px;
        font-size: 20px;
        font-weight: 500;
      }

      ul {
        margin-left: 30px;

        li {
          font-size: 18px;
          margin-bottom: 10px;
        }
      }
    }

    .tstory-container {
      border-radius: 20px;
      width: 100%;
      height: 350px;
      display: flex;
      flex-direction: column;
      background-color: #ffffff;

      img {
        margin: 40px 0 10px 30px;
        width: 200px;
        height: 60px;
      }

      a {
        margin-left: 30px;
        font-size: 20px;
        text-decoration: none;
      }

      .tstory-title {
        margin-left: 30px;
        font-size: 20px;
        font-weight: 500;
      }

      ul {
        margin-left: 30px;

        li {
          font-size: 18px;
          margin-bottom: 10px;
        }
      }
    }
  }

  .portfolio-container {
    border-radius: 20px;
    margin-top: 30px;
    width: 1000px;
    height: 250px;
    background-color: #ffffff;
    justify-content: space-between;
    display: flex;
    flex-direction: column;

    .portfolio-title {
      display: flex;
      padding: 30px 20px;
    }

    .title-text {
      margin-left: 20px;
      font-size: 60px;
      font-weight: 600;
    }

    .portfolio-text-box {
      margin-bottom: 30px;
      margin-left: 20px;
      display: flex;
      flex-direction: column;

      .portfolio-text {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
  }

  @media (max-width: 767px) {
    .archiving-container {
      flex-direction: column;
    }
  }
`;

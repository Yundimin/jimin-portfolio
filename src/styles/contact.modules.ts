import styled from "styled-components";

export const ContactWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 1140px;
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

  .contact-box {
    width: 80%;
    max-width: 1400px;
    min-width: 300px;
    height: 1000px;
    display: flex;
    flex-direction: row;
    padding: 20px;
    margin-bottom: 100px;
    align-items: center;

    .address-box {
      width: 100%;
      height: fit-content;
      flex-direction: column;
      display: flex;
      justify-content: center;
      align-items: center;

      .address-title {
        font-size: 20px;
        font-weight: 400;
        text-align: center;
        color: white;
      }
      .address-item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: white;

        .item-box {
          margin-top: 30px;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 40px;
            margin-right: 5px;
          }

          .item-text {
            font-size: 30px;
            font-weight: 600;
          }
        }

        .mail-text {
          font-size: 20px;
          margin-top: 20px;
        }
        a {
          font-size: 20px;
          margin-top: 20px;
          text-decoration: none;
          color: white;
        }
      }
    }

    .email-box {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: fit-content;
      border: 1px solid white;
      border-radius: 20px;
      padding: 10px;
      color: white;
      .name-box {
        display: flex;
        flex-direction: column;

        .name-title {
          font-size: 25px;
          font-weight: 600;
          margin: 10px 0;
        }

        input {
          padding: 10px;
          border-radius: 10px;
          font-size: 20px;
          margin-bottom: 10px;
          max-width: 100%;

          &:focus {
            border-color: white;
            box-shadow: 0;
            outline: none;
          }
        }
      }
    }

    .mail-box {
      display: flex;
      flex-direction: column;

      .mail-title {
        font-size: 25px;
        font-weight: 600;
        margin: 10px 0;
      }

      input {
        padding: 10px;
        border-radius: 10px;
        font-size: 20px;
        margin-bottom: 10px;
        max-width: 100%;

        &:focus {
          border-color: white;
          box-shadow: 0;
          outline: none;
        }
      }
    }

    .message-box {
      display: flex;
      flex-direction: column;

      .message-title {
        font-size: 25px;
        font-weight: 600;
        margin: 10px 0;
      }

      textarea {
        padding: 10px;
        border-radius: 10px;
        font-size: 20px;
        margin-bottom: 10px;
        height: 400px;
        max-height: 500px;
        width: inherit;
        max-width: 700px;

        &:focus {
          border-color: white;
          box-shadow: 0;
          outline: none;
        }
      }
    }

    .submit-button {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      button {
        font-size: 16px;
        width: 200px;
        padding: 15px;
        background-color: white;
        border-radius: 10px;
      }
    }
  }
`;

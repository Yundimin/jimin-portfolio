import styled from "styled-components";

export const ContactWrapper = styled.div`
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

  .contact-box {
    width: 80%;
    max-width: 1400px;
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
        font-size: 28px;
        font-weight: 400;
        text-align: center;
        color: white;
      }
      .address-item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 20px;

        .item-box {
          margin-top: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 15px;

          img {
            width: 150px;
            cursor: pointer;
          }

          .mail-svg {
            filter: invert(100%) sepia(0%) saturate(5014%) hue-rotate(137deg)
              brightness(111%) contrast(108%);

            &:hover {
              filter: invert(66%) sepia(56%) saturate(435%) hue-rotate(87deg)
                brightness(93%) contrast(86%);
            }
          }

          .git-svg {
            filter: invert(100%) sepia(0%) saturate(5014%) hue-rotate(137deg)
              brightness(111%) contrast(108%);

            &:hover {
              filter: invert(0%) sepia(0%) saturate(7461%) hue-rotate(174deg)
                brightness(94%) contrast(99%);
            }
          }

          .blog-svg {
            filter: invert(100%) sepia(0%) saturate(5014%) hue-rotate(137deg)
              brightness(111%) contrast(108%);

            &:hover {
              filter: invert(44%) sepia(25%) saturate(6451%) hue-rotate(341deg)
                brightness(106%) contrast(101%);
            }
          }

          .clipboard-text {
            display: flex;
            font-size: 25px;
            cursor: pointer;
            color: white;

            &:hover {
              color: #008080;
            }

            img {
              width: 30px;
              margin-right: 5px;
              filter: invert(100%) sepia(0%) saturate(5014%) hue-rotate(137deg)
                brightness(111%) contrast(108%);

              &:hover {
                filter: invert(25%) sepia(83%) saturate(2688%)
                  hue-rotate(164deg) brightness(88%) contrast(103%);
              }
            }
          }

          .item-text {
            font-size: 30px;
            font-weight: 600;
            color: white;
          }
        }

        a {
          font-size: 25px;
          text-decoration: none;
          color: white;

          &:hover {
            color: #008080;
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    .title {
      font-size: 40px;
    }

    .contact-box {
      .address-box {
        .address-title {
          padding: 10px;
          font-size: 20px;
        }

        .address-item {
          margin-top: 20px;

          .item-box {
            margin-top: 30px;
            gap: 15px;

            .clipboard-text {
              font-size: 20px;

              img {
                width: 23px;
              }
            }

            img {
              width: 100px;
              cursor: pointer;
            }
          }

          a {
            font-size: 20px;
          }
        }
      }
    }
  }

  @media (max-width: 360px) {
    .title {
      font-size: 40px;
    }

    .contact-box {
      .address-box {
        .address-title {
          padding: 10px;
          font-size: 15px;
        }

        .address-item {
          .item-box {
            .clipboard-text {
              font-size: 17px;

              img {
                width: 23px;
              }
            }

            img {
              width: 100px;
              cursor: pointer;
            }
          }

          a {
            font-size: 17px;
          }
        }
      }
    }
  }
`;

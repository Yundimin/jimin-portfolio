import styled from "styled-components";

export const ProjectWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 100px;
  height: fit-content;
  background-color: #242424;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title {
    font-size: 60px;
    font-weight: 700;
    margin-top: 50px;
    color: #ffffff;
  }

  .project-container {
    width: 1200px;
    height: fit-content;
    margin-top: 50px;
    padding: 40px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    background-color: white;
    border-radius: 20px;
    flex-direction: column;

    .project-title-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .project-title {
        font-size: 30px;
        font-weight: 600;
        margin-top: 30px;
      }

      .project-duration {
        font-size: 17px;
        font-weight: 400;
        margin-top: 5px;
      }
    }

    .project-swiper-container {
      height: 100%;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;

      .swiper-container {
        display: flex;
        width: 60%;
        height: 100%;

        .swiper-slide {
          width: 100%;
          justify-content: center;
          display: flex;
          transition: opacity 0.5s ease;

          .slide-img {
            width: 80%;
          }
        }

        .swiper-button-prev,
        .swiper-button-next {
          z-index: 3;
          position: absolute;
          cursor: pointer;
          width: 48px;
        }

        .swiper-button-prev {
          left: 0;
        }

        .swiper-button-next {
          right: 0;
        }
      }

      .explain-container {
        width: 40%;
        height: 100%;
        background-color: white;

        .explain-title {
          font-size: 18px;
          flex-wrap: wrap;
        }

        .function-box {
          width: 90%;
          margin-top: 20px;
          border-top: 1px solid blueviolet;
          .function-title {
            margin-top: 10px;
            font-size: 20px;
            font-weight: 600;
          }

          ul {
            li {
              font-size: 18px;
              margin-bottom: 10px;
            }
          }
        }
        .url-box {
          margin-top: 20px;
          .url-title {
            margin-top: 10px;
            font-size: 20px;
            font-weight: 600;
          }

          a {
            margin-left: 5px;
            font-size: 20px;
            text-decoration: none;
          }
        }
        .github-box {
          margin-top: 20px;
          .github-title {
            margin-top: 10px;
            font-size: 20px;
            font-weight: 600;
          }

          a {
            margin-left: 5px;
            font-size: 20px;
            text-decoration: none;
          }
        }
        .skills-box {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          .skills-title {
            margin-top: 10px;
            font-size: 20px;
            font-weight: 600;
          }
          .skills-img {
            display: flex;
            margin-top: 20px;
            img {
              width: 50px;
              margin-right: 10px;
              transition: transform 0.3s ease-in-out;
              &:hover {
                transform: scale(1.07);
              }
            }
          }
        }
      }
    }
  }
`;

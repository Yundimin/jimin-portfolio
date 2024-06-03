import styled from "styled-components";

export const HistoryWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 1400px;
  background-color: #fde8e8;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title {
    font-size: 60px;
    font-weight: 700;
    margin: 50px;
    color: #333333;
  }

  .history-container {
    width: 90%;
    border-top: 4px solid #333333;
    display: flex;
    margin-bottom: 100px;
    align-items: center;
    justify-content: center;

    .history-table-box {
      width: 900px;
      height: fit-content;
      margin-top: 40px;

      display: flex;
      flex-direction: column;
      align-items: center;

      .history-table {
        width: 90%;
        display: flex;
        flex-direction: row;
        margin: 20px;
        border-bottom: 1px solid #5d4037;

        .history-img-box {
          width: 200px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          margin-right: 25px;

          img {
            width: 200px;
            height: 53px;
          }
        }

        .history-text-box {
          display: flex;
          flex-direction: column;

          .table-title {
            font-size: 25px;
            font-weight: 500;
            margin-bottom: 20px;
          }
          .table-position {
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 20px;
          }
          .table-duration {
            margin-bottom: 20px;
          }
          .table-description {
            font-size: 18px;
            margin-bottom: 20px;
            line-height: 30px;
          }
        }
      }

      .more-info {
        font-size: 22px;
        font-weight: 600;
        margin: 20px;
      }
    }
  }

  @media (max-width: 767px) {
    height: fit-content;
    .title {
      font-size: 40px;
    }

    .history-container {
      .history-table-box {
        .history-table {
          flex-direction: column;

          .history-text-box {
            .table-title {
              font-size: 20px;
              margin-bottom: 20px;
            }
            .table-position {
              font-size: 18px;
              margin-bottom: 20px;
            }
            .table-duration {
              margin-bottom: 20px;
            }
            .table-description {
              font-size: 18px;
              line-height: 30px;
            }
          }

          .history-img-box {
            margin-right: 0;
            margin-bottom: 50px;

            img {
              width: 200px;
              height: 53px;
            }
          }
        }

        .more-info {
          font-size: 18px;
        }
      }
    }
  }
`;

import styled, { keyframes } from "styled-components";

const revealAnimation = keyframes`
from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HomeWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #121212;
  justify-content: center;
  align-items: center;

  .title-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 500px;
    width: 100%;
    max-width: 1200px;
    color: #999999;
    text-transform: uppercase;
    margin: 15px 15px 15px 30px;
  }

  .invite-text-box {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const TitleInviteText = styled.span<{ delay: number }>`
  display: flex;
  opacity: 0;
  animation: ${revealAnimation} 1s ease forwards;
  animation-delay: ${(props) => props.delay}s;
  font-size: 70px;

  @media (max-width: 1220px) {
    font-size: 50px;
  }

  @media (max-width: 900px) {
    font-size: 40px;
  }

  @media (max-width: 767px) {
    font-size: 30px;
  }

  @media (max-width: 550px) {
    font-size: 20px;
  }
`;

export const TitleText = styled.div`
  display: flex;
  opacity: 0;
  animation: ${revealAnimation} 0.5s ease forwards;
  animation-delay: 3.5s;
  word-break: keep-all;
  white-space: pre-wrap;
  text-align: start;
  margin-top: 50px;
  font-size: 30px;

  @media (max-width: 1220px) {
    font-size: 25px;
  }

  @media (max-width: 900px) {
    font-size: 20px;
  }

  @media (max-width: 767px) {
    font-size: 15px;
  }

  @media (max-width: 550px) {
    font-size: 13px;
  }
`;

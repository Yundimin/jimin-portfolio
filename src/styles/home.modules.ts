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
    align-items: center;
    height: 500px;
    width: 90%;
    color: #999999;
    text-transform: uppercase;
  }

  .invite-text-box {
    display: flex;
  }
`;

export const TitleInviteText = styled.span<{ delay: number }>`
  display: flex;
  opacity: 0;
  animation: ${revealAnimation} 1s ease forwards;
  animation-delay: ${(props) => props.delay}s;
  font-size: 70px;
`;

export const TitleText = styled.div`
  display: flex;
  opacity: 0;
  animation: ${revealAnimation} 0.5s ease forwards;
  animation-delay: 3.5s;
  word-wrap: break-word;
  white-space: pre-wrap;
  text-align: center;
  margin-top: 20px;
  font-size: 30px;
`;

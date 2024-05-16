import { useState } from "react";
import {
  HomeWrapper,
  TitleInviteText,
  TitleText,
} from "../styles/home.modules";

export function Home() {
  const [showWelcome, setShowWelcome] = useState(false);

  const handleAnimationEnd = () => {
    setShowWelcome(true);
  };

  const titleInviteText = "Invite to My Portfolio Universe";
  return (
    <HomeWrapper>
      <div className="title-container">
        <div className="invite-text-box">
          {titleInviteText.split("").map((char, index) => (
            <TitleInviteText key={index} delay={index * 0.1}>
              {char === " " ? "\u00A0" : char}
            </TitleInviteText>
          ))}
        </div>

        <TitleText show={showWelcome}>
          안녕하세요, 끊임없는 학습으로 더 나은 솔루션을 찾아가는 개발자 윤지민
          입니다.
        </TitleText>
      </div>
    </HomeWrapper>
  );
}

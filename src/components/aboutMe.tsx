import { AboutMeWrapper } from "../styles/aboutMe.modules";
import aboutMe from "../assets/aboutMe.jpeg";

const text1 = "안녕하세요! 열정적인 소프트웨어 개발자 윤지민입니다.";
const text2 =
  "코딩에 대한 끝없는 열정과 창의적인 문제 해결 능력을 가지고 있습니다. 주로 웹 개발 분야에서 활동하며, 프론트엔드부터 백엔드까지 다양한 기술을 다룰 수 있습니다. ";
const text3 =
  "사용자 경험을 개선하고, 사용자 중심의 솔루션을 제공하는 것에 관심이 많습니다. 새로운 기술에 대한 열정과 호기심이 끊이지 않으며, 항상 더 나은 코드와 최적화된 솔루션을 만들기 위해 노력합니다. ";
const text4 =
  "제 포트폴리오를 통해 저의 작업물을 확인하시고, 함께 일할 기회를 주시면 최선을 다해 성과를 이룰 것을 약속드립니다. ";
const text5 = "함께 혁신적인 프로젝트를 만들어 나가는 것을 기대합니다!";
export function AboutMe() {
  return (
    <AboutMeWrapper id="aboutme">
      <div className="image-container">
        <img src={aboutMe} alt="aboutMe.jpeg"></img>
      </div>
      <div className="text-container">
        <div className="text-title">ABOUT ME</div>
        <div className="text-box">
          <div className="text-explain">{text1}</div>
          <div className="text-explain">{text2}</div>
          <div className="text-explain">{text3}</div>
          <div className="text-explain">{text4}</div>
          <div className="text-explain">{text5}</div>
        </div>
      </div>
    </AboutMeWrapper>
  );
}

import { ArchivingWrapper } from "../styles/archiving.modules";
import githubImg from "../assets/archiving/GitHub_Logo.png";
import tstoryImg from "../assets/archiving/tstory.webp";
import portfolioImg from "../assets/archiving/portfolio.png";

export function Archiving() {
  return (
    <ArchivingWrapper id="archiving">
      <div className="title">ARCHIVING</div>
      <div className="archiving-container">
        <div className="github-container">
          <img src={githubImg} alt="github"></img>

          <a
            href="https://github.com/yundimin"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/yundimin
          </a>

          <div className="github-title">소스 코드 저장소입니다.</div>

          <ul className="archiving-list">
            <li className="archiving-item">
              과거의 프로젝트, 웹, 앱의 소스 코드
            </li>
            <li className="archiving-item">라이브러리 활동 내역</li>
          </ul>
        </div>
        <div className="tstory-container">
          <img src={tstoryImg} alt="github"></img>
          <p>
            <a
              href="https://jminn.tistory.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://jminn.tistory.com
            </a>
          </p>
          <div className="tstory-title">
            개인 스터디 및 공유 목적의 블로그입니다.
          </div>
          <ul className="archiving-list">
            <li className="archiving-item">
              공부한 내용을 정리하기 위해 작성한 기록
            </li>
            <li className="archiving-item">더 나은 개발자가 되기 위한 노력</li>
            <li className="archiving-item">
              내가 공부한 내용을 공유하기 위한 기록
            </li>
          </ul>
        </div>
      </div>
      <div className="portfolio-container">
        <div className="portfolio-title">
          <img
            src={portfolioImg}
            alt="portfolioImg"
            style={{ width: 60, height: 60 }}
          ></img>
          <div className="title-text">Portfolio</div>
        </div>
        <div className="portfolio-text-box">
          <div className="portfolio-text">
            클릭 시 포트폴리오 노션 페이지로 이동합니다.
          </div>
          <div className="portfolio-text">
            이력서를 보완하기 위해 작성한 포트폴리오입니다.
          </div>
        </div>
      </div>
    </ArchivingWrapper>
  );
}

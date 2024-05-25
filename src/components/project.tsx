import { ProjectWrapper } from "../styles/project.modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import reactImg from "../assets/frontend/React-icon.svg";
import firebaseImg from "../assets/backend/firebase.png";
import tsImg from "../assets/frontend/file-type-typescript-official.svg";
import styledComponentImg from "../assets/frontend/styled-components.png";
import portfolioImg1 from "../assets/portfolio/portfolioImg1.png";
import portfolioImg2 from "../assets/portfolio/portfolioImg2.png";
import portfolioImg3 from "../assets/portfolio/portfolioImg3.png";
import portfolioImg4 from "../assets/portfolio/portfolioImg4.png";

const portfolioImages = [
  portfolioImg1,
  portfolioImg2,
  portfolioImg3,
  portfolioImg4,
];

const portfolioText1 = "포트폴리오 용도로 제작한 웹사이트입니다.";
const portfolioText2 = "포트폴리오 용도로 제작한 웹사이트입니다.";
const InstaCloneText = "강의를 통한 인스타그램 클론 앱";

export function Project() {
  return (
    <ProjectWrapper id="project">
      <div className="title">PROJECT</div>
      <div className="project-container">
        <div className="project-title-container">
          <div className="project-title">나의 포트폴리오 사이트</div>
          <div className="project-duration">2024.05 ~ 2024.05 (1명) </div>
        </div>
        <div className="project-swiper-container">
          <div className="explain-container">
            <div className="explain-title">{portfolioText1}</div>
            <div className="function-box">
              <div className="function-title">주요 기능</div>
              <ul>
                <li>반응형 웹페이지</li>
                <li>이메일 전송 기능</li>
                <li>Swiper 라이브러리 적용</li>
              </ul>
            </div>
            <div className="url-box">
              <div className="url-title">URL</div>
              <p>
                <a
                  href="https://jminn.tistory.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://jminn.tistory.com
                </a>
              </p>
            </div>
            <div className="github-box">
              <div className="github-title">GitHub</div>
              <p>
                <a
                  href="https://jminn.tistory.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://jminn.tistory.com
                </a>
              </p>
            </div>
            <div className="skills-box">
              <div className="skills-title">기술 스택</div>
              <div className="skills-img">
                <img src={reactImg} alt="reactImg" />
                <img src={tsImg} alt="tsImg" />
                <img src={styledComponentImg} alt="styledComponentImg" />
                <img src={firebaseImg} alt="firebaseImg" />
              </div>
            </div>
          </div>
          <div className="swiper-container">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              {portfolioImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Portfolio${index + 1}`}
                    className="slide-img"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="project-container">
        <div className="project-title-container">
          <div className="project-title">외주 포트폴리오 사이트</div>
          <div className="project-duration">2024.04 ~ 2024.06 (1명) </div>
        </div>
        <div className="project-swiper-container">
          <div className="explain-container">
            <div className="explain-title">{portfolioText1}</div>
            <div className="function-box">
              <div className="function-title">주요 기능</div>
              <ul>
                <li>반응형 웹페이지</li>
                <li>이메일 전송 기능</li>
                <li>Swiper 라이브러리 적용</li>
              </ul>
            </div>
            <div className="url-box">
              <div className="url-title">URL</div>
              <p>
                <a
                  href="https://jminn.tistory.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://jminn.tistory.com
                </a>
              </p>
            </div>
            <div className="github-box">
              <div className="github-title">GitHub</div>
              <p>
                <a
                  href="https://jminn.tistory.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://jminn.tistory.com
                </a>
              </p>
            </div>
            <div className="skills-box">
              <div className="skills-title">기술 스택</div>
              <div className="skills-img">
                <img src={reactImg} alt="reactImg" />
                <img src={tsImg} alt="tsImg" />
                <img src={styledComponentImg} alt="styledComponentImg" />
                <img src={firebaseImg} alt="firebaseImg" />
              </div>
            </div>
          </div>
          <div className="swiper-container">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              {portfolioImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Portfolio${index + 1}`}
                    className="slide-img"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="project-container">
        <div className="project-title-container">
          <div className="project-title">인스타그램 클론코딩</div>
          <div className="project-duration">2024.01 ~ 2024.03 (1명) </div>
        </div>
        <div className="project-swiper-container">
          <div className="explain-container">
            <div className="explain-title">{InstaCloneText}</div>
            <div className="function-box">
              <div className="function-title">주요 기능</div>
              <ul>
                <li>로그인, 회원가입, 피드, 검색</li>
                <li> 1:1 메시지 기능</li>
                <li>React Native 사용</li>
              </ul>
            </div>
            <div className="github-box">
              <div className="github-title">GitHub</div>
              <p>
                <a
                  href="https://jminn.tistory.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://jminn.tistory.com
                </a>
              </p>
            </div>
            <div className="skills-box">
              <div className="skills-title">기술 스택</div>
              <div className="skills-img">
                <img src={reactImg} alt="reactImg" />
                <img src={tsImg} alt="tsImg" />
                <img src={styledComponentImg} alt="styledComponentImg" />
                <img src={firebaseImg} alt="firebaseImg" />
              </div>
            </div>
          </div>
          <div className="swiper-container">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              {portfolioImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Portfolio${index + 1}`}
                    className="slide-img"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </ProjectWrapper>
  );
}

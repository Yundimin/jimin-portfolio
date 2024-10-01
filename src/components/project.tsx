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
import bootstrap from "../assets/frontend/bootstrap.png";
import portfolioImg1 from "../assets/portfolio/portfolioImg1.png";
import portfolioImg2 from "../assets/portfolio/portfolioImg2.png";
import portfolioImg3 from "../assets/portfolio/portfolioImg3.png";
import portfolioImg4 from "../assets/portfolio/portfolioImg4.png";
import chooPage1 from "../assets/portfolio/choo-page1.png";
import chooPage2 from "../assets/portfolio/choo-page2.png";
import chooPage3 from "../assets/portfolio/choo-page3.png";
import chooPage4 from "../assets/portfolio/choo-page4.png";
import chooPage5 from "../assets/portfolio/choo-page5.png";
import chooPage6 from "../assets/portfolio/choo-page6.png";
import instaClone1 from "../assets/portfolio/insta-clone1.png";
import instaClone2 from "../assets/portfolio/insta-clone2.png";
import instaClone3 from "../assets/portfolio/insta-clone3.png";
import instaClone4 from "../assets/portfolio/insta-clone4.png";
import postgre from "../assets/backend/postgreSQL.png";
import prisma from "../assets/backend/prisma.png";
import graphql from "../assets/backend/graphql.png";
import node from "../assets/backend/node.png";
import rn from "../assets/mobileApp/reactNative.png";

const portfolioImages = [
  portfolioImg1,
  portfolioImg2,
  portfolioImg3,
  portfolioImg4,
];

const instaImages = [instaClone1, instaClone2, instaClone3, instaClone4];

const chooImages = [
  chooPage1,
  chooPage2,
  chooPage3,
  chooPage4,
  chooPage5,
  chooPage6,
];

const portfolioText = "포트폴리오 용도로 제작한 웹사이트입니다.";
const InstaCloneText = "강의를 통한 인스타그램 클론 앱";

export function Project() {
  return (
    <ProjectWrapper id="project">
      <div className="title">PROJECT</div>
      <div className="project-container">
        <div className="project-title-container">
          <div className="project-title">나의 포트폴리오 사이트</div>
        </div>
        <div className="project-swiper-container">
          <div className="explain-container">
            <div className="explain-title">{portfolioText}</div>
            <div className="function-box">
              <div className="function-title">주요 기능</div>
              <ul>
                <li>반응형 웹페이지</li>
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
                  href="https://github.com/Yundimin/jimin-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yundimin/jimin-portfolio
                </a>
              </p>
            </div>
            <div className="skills-box">
              <div className="skills-title">기술 스택</div>
              <div className="skills-img">
                <img src={reactImg} alt="reactImg" />
                <img src={tsImg} alt="tsImg" />
                <img src={styledComponentImg} alt="styledComponentImg" />
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
        </div>
        <div className="project-swiper-container">
          <div className="explain-container">
            <div className="explain-title">{portfolioText}</div>
            <div className="function-box">
              <div className="function-title">주요 기능</div>
              <ul>
                <li>반응형 웹페이지</li>
                <li>Bootstrap 라이브러리 적용</li>
                <li>Swiper 라이브러리 적용</li>
              </ul>
            </div>
            <div className="url-box">
              <div className="url-title">URL</div>
              <p>
                <a
                  href="https://choo-page-b290f.web.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://choo-page-b290f.web.app
                </a>
              </p>
            </div>
            <div className="github-box">
              <div className="github-title">GitHub</div>
              <p>
                <a
                  href="https://github.com/Yundimin/my-portfolio/tree/master"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yundimin/my-portfolio/tree/master
                </a>
              </p>
            </div>
            <div className="skills-box">
              <div className="skills-title">기술 스택</div>
              <div className="skills-img">
                <img src={reactImg} alt="reactImg" />
                <img src={tsImg} alt="tsImg" />
                <img src={bootstrap} alt="bootstrapImg" />
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
              {chooImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`chooImages${index + 1}`}
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
                  href="https://github.com/Yundimin/instaclone-native/tree/master"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yundimin/instaclone-native/tree/master
                </a>
              </p>
            </div>
            <div className="skills-box">
              <div className="skills-title">기술 스택</div>
              <div className="skills-img">
                <img src={rn} alt="rnImg" />
                <img src={node} alt="nodeImg" />
                <img src={prisma} alt="prismaImg" />
                <img src={graphql} alt="graphqlImg" />
                <img src={postgre} alt="postgreImg" />
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
              {instaImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Insta${index + 1}`}
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

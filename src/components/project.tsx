import { ProjectWrapper } from "../styles/project.modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { assets } from "../assets";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Skill = {
  src: string;
  alt: string;
};

type ProjectItem = {
  title: string;
  description: string;
  features: string[];
  githubUrl: string;
  githubLabel: string;
  images: string[];
  imageAltPrefix: string;
  skills: Skill[];
  url?: string;
};

const swiperModules = [Navigation, Pagination, A11y];

const {
  portfolio: {
    amazonaImages,
    denatalImages,
    portfolioImages,
    chooImages,
    instaImages,
  },
  frontend: {
    reactImg,
    tsImg,
    styledComponentsImg,
    bootstrapImg,
    nextjsImg,
    tailwildImg,
  },
  backend: {
    firebaseImg,
    nodeImg,
    postgreSqlImg,
    prismaImg,
    graphqlImg,
    mongoImg,
  },
  mobile: { reactNativeImg },
} = assets;

const portfolioDescription = "포트폴리오 용도로 제작한 웹사이트입니다.";
const instaCloneDescription = "강의를 통한 인스타그램 클론 앱";
const amazonaDescription =
  "이커머스 아마존을 참고하여 상품 탐색부터 장바구니, 결제, 주문 관리를 포함한 이커머스 웹 서비스를 개발했습니다.";
const dentalDescription = "Vapi AI 기반 치과 예약 서비스";

const projects: ProjectItem[] = [
  {
    title: "이커머스 웹 서비스",
    description: amazonaDescription,
    features: [
      "상품조회, 카테고리/태그 기반 탐색, 검색 및 정렬 기능",
      "장바구니, 주문 생성, 배송 정보 입력, 결제 완료",
      "Stripe Webhook 및 PayPal 연동",
      "NextAuth 기반",
    ],
    githubUrl: "https://github.com/Yundimin/my-amazon",
    githubLabel: "Yundimin/my-amazon",
    images: amazonaImages,
    imageAltPrefix: "이커머스 웹 서비스 화면",
    skills: [
      { src: reactImg, alt: "React" },
      { src: nextjsImg, alt: "Next JS" },
      { src: tailwildImg, alt: "Tailwind CSS" },
      { src: tsImg, alt: "TypeScript" },
      { src: mongoImg, alt: "MongoDB" },
    ],
  },
  {
    title: "치과 예약 및 AI 상담 웹서비스",
    description: dentalDescription,
    features: ["Clerk 기반 로그인, 회원가입", "TanStack Query", "PostgreSQL"],
    githubUrl: "https://github.com/Yundimin/dental-service",
    githubLabel: "Yundimin/dental-service",
    images: denatalImages,
    imageAltPrefix: "치과 예약 웹 서비스 화면",
    skills: [
      { src: reactNativeImg, alt: "React Native" },
      { src: nextjsImg, alt: "Next JS" },
      { src: tailwildImg, alt: "Tailwind CSS" },
      { src: postgreSqlImg, alt: "PostgreSQL" },
      { src: tsImg, alt: "TypeScript" },
    ],
  },
  {
    title: "나의 포트폴리오 사이트",
    description: portfolioDescription,
    features: ["반응형 웹페이지", "Swiper 라이브러리 적용"],
    url: "https://jimin-portfolio-d4557.web.app",
    githubUrl: "https://github.com/Yundimin/jimin-portfolio",
    githubLabel: "Yundimin/jimin-portfolio",
    images: portfolioImages,
    imageAltPrefix: "포트폴리오 사이트 화면",
    skills: [
      { src: reactImg, alt: "React" },
      { src: tsImg, alt: "TypeScript" },
      { src: styledComponentsImg, alt: "styled-components" },
    ],
  },
  {
    title: "외주 포트폴리오 사이트",
    description: portfolioDescription,
    features: [
      "반응형 웹페이지",
      "Bootstrap 라이브러리 적용",
      "Swiper 라이브러리 적용",
    ],
    url: "https://choo-page-b290f.web.app",
    githubUrl: "https://github.com/Yundimin/my-portfolio/tree/master",
    githubLabel: "Yundimin/my-portfolio/tree/master",
    images: chooImages,
    imageAltPrefix: "외주 포트폴리오 사이트 화면",
    skills: [
      { src: reactImg, alt: "React" },
      { src: tsImg, alt: "TypeScript" },
      { src: bootstrapImg, alt: "Bootstrap" },
      { src: styledComponentsImg, alt: "styled-components" },
      { src: firebaseImg, alt: "Firebase" },
    ],
  },
  {
    title: "인스타그램 클론코딩",
    description: instaCloneDescription,
    features: [
      "로그인, 회원가입, 피드, 검색",
      "1:1 메시지 기능",
      "React Native 사용",
    ],
    githubUrl: "https://github.com/Yundimin/instaclone-native/tree/master",
    githubLabel: "Yundimin/instaclone-native/tree/master",
    images: instaImages,
    imageAltPrefix: "인스타그램 클론 앱 화면",
    skills: [
      { src: reactNativeImg, alt: "React Native" },
      { src: nodeImg, alt: "Node.js" },
      { src: prismaImg, alt: "Prisma" },
      { src: graphqlImg, alt: "GraphQL" },
      { src: postgreSqlImg, alt: "PostgreSQL" },
    ],
  },
];

function ProjectCarousel({
  images,
  imageAltPrefix,
}: Pick<ProjectItem, "images" | "imageAltPrefix">) {
  return (
    <div className="swiper-container">
      <Swiper
        modules={swiperModules}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={image}>
            <img
              src={image}
              alt={`${imageAltPrefix} ${index + 1}`}
              className="slide-img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function ProjectLinks({
  url,
  githubUrl,
  githubLabel,
}: Pick<ProjectItem, "url" | "githubUrl" | "githubLabel">) {
  return (
    <>
      {url && (
        <div className="url-box">
          <div className="url-title">URL</div>
          <p>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          </p>
        </div>
      )}
      <div className="github-box">
        <div className="github-title">GitHub</div>
        <p>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            {githubLabel}
          </a>
        </p>
      </div>
    </>
  );
}

export function Project() {
  return (
    <ProjectWrapper id="project">
      <div className="title">PROJECT</div>
      {projects.map((project) => (
        <div className="project-container" key={project.title}>
          <div className="project-title-container">
            <div className="project-title">{project.title}</div>
          </div>
          <div className="project-swiper-container">
            <div className="explain-container">
              <div className="explain-title">{project.description}</div>
              <div className="function-box">
                <div className="function-title">주요 기능</div>
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              <ProjectLinks
                url={project.url}
                githubUrl={project.githubUrl}
                githubLabel={project.githubLabel}
              />
              <div className="skills-box">
                <div className="skills-title">기술 스택</div>
                <div className="skills-img">
                  {project.skills.map((skill) => (
                    <img key={skill.alt} src={skill.src} alt={skill.alt} />
                  ))}
                </div>
              </div>
            </div>
            <ProjectCarousel
              images={project.images}
              imageAltPrefix={project.imageAltPrefix}
            />
          </div>
        </div>
      ))}
    </ProjectWrapper>
  );
}

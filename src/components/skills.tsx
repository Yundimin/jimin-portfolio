import { SkillsWrapper } from "../styles/skills.modules";
import { assets } from "../assets";

const {
  frontend: {
    angularImg,
    nextjsImg,
    reactImg,
    htmlImg,
    cssImg,
    jsImg,
    tsImg,
    styledComponentsImg,
    tailwildImg,
    ionicImg,
    bootstrapImg,
  },
  backend: {
    nodeImg,
    postgreSqlImg,
    prismaImg,
    mongoImg,
    mysqlImg,
    firebaseImg,
    graphqlImg,
    typeormImg,
  },
  tools: { dataGripImg, webStormImg, vscodeImg },
  community: { figmaImg, notionImg, slackImg, teamsImg },
  mobile: { reactNativeImg },
  deployment: { awsImg },
} = assets;

type SkillItem = {
  src: string;
  alt: string;
  className?: string;
};

type SkillSection = {
  title: string;
  wrapperClassName: string;
  titleClassName: string;
  imageBoxClassName: string;
  items: SkillItem[];
};

const skillSections: SkillSection[] = [
  {
    title: "Frontend",
    wrapperClassName: "front-end-wrapper",
    titleClassName: "front-end-title",
    imageBoxClassName: "front-end-img-box",
    items: [
      { src: angularImg, alt: "Angular" },
      { src: reactImg, alt: "React" },
      { src: nextjsImg, alt: "Next.js" },
      { src: ionicImg, alt: "Ionic" },
      { src: htmlImg, alt: "HTML" },
      { src: cssImg, alt: "CSS", className: "compact-icon" },
      { src: jsImg, alt: "JavaScript" },
      { src: tsImg, alt: "TypeScript" },
      { src: styledComponentsImg, alt: "Styled Components" },
      { src: tailwildImg, alt: "Tailwind CSS" },
      { src: bootstrapImg, alt: "Bootstrap" },
    ],
  },
  {
    title: "Backend",
    wrapperClassName: "back-end-wrapper",
    titleClassName: "back-end-title",
    imageBoxClassName: "back-end-img-box",
    items: [
      { src: nodeImg, alt: "Node.js" },
      { src: firebaseImg, alt: "Firebase" },
      { src: postgreSqlImg, alt: "PostgreSQL" },
      { src: mongoImg, alt: "MongoDB" },
      { src: graphqlImg, alt: "GraphQL" },
      { src: prismaImg, alt: "Prisma" },
      { src: mysqlImg, alt: "MySQL" },
      { src: typeormImg, alt: "TypeORM" },
    ],
  },
  {
    title: "Tools",
    wrapperClassName: "tool-wrapper",
    titleClassName: "tool-title",
    imageBoxClassName: "tool-img-box",
    items: [
      { src: dataGripImg, alt: "DataGrip" },
      { src: webStormImg, alt: "WebStorm" },
      { src: vscodeImg, alt: "VS Code" },
    ],
  },
  {
    title: "Community",
    wrapperClassName: "community-wrapper",
    titleClassName: "community-title",
    imageBoxClassName: "community-img-box",
    items: [
      { src: figmaImg, alt: "Figma" },
      { src: notionImg, alt: "Notion" },
      { src: slackImg, alt: "Slack" },
      { src: teamsImg, alt: "Microsoft Teams" },
    ],
  },
  {
    title: "Mobile App",
    wrapperClassName: "mobile-wrapper",
    titleClassName: "mobile-title",
    imageBoxClassName: "mobile-img-box",
    items: [{ src: reactNativeImg, alt: "React Native" }],
  },
  {
    title: "Deployment",
    wrapperClassName: "deployment-wrapper",
    titleClassName: "deployment-title",
    imageBoxClassName: "deployment-img-box",
    items: [{ src: awsImg, alt: "AWS" }],
  },
];

function SkillGroup({
  title,
  wrapperClassName,
  titleClassName,
  imageBoxClassName,
  items,
}: SkillSection) {
  return (
    <div className={wrapperClassName}>
      <div className={titleClassName}>{title}</div>
      <div className={imageBoxClassName}>
        {items.map((item) => (
          <img
            key={item.alt}
            src={item.src}
            alt={item.alt}
            className={item.className}
          />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const [frontendSection, backendSection, toolsSection, communitySection, mobileSection, deploymentSection] =
    skillSections;

  return (
    <SkillsWrapper id="skills">
      <div className="skill-title">SKILLS</div>
      <div className="skill-subtitle">현재까지 배우고 사용한 기술입니다.</div>
      <div className="skill-box">
        <SkillGroup {...frontendSection} />
        <SkillGroup {...backendSection} />
        <div className="tool-community-box">
          <SkillGroup {...toolsSection} />
          <SkillGroup {...communitySection} />
        </div>
        <div className="mobile-deployment-box">
          <SkillGroup {...mobileSection} />
          <SkillGroup {...deploymentSection} />
        </div>
      </div>
    </SkillsWrapper>
  );
}

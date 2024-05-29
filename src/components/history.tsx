import { HistoryWrapper } from "../styles/history.modules";
import toonsImg from "../assets/history/toonsquare.png";
import gmImg from "../assets/history/groupm.png";
import univImg from "../assets/history/university.png";

const historyData = [
  {
    title: "(주)TOONSQUARE 근무",
    position: "70% Frontend, 30% Backend",
    duration: "2022.11 ~ 현재",
    description:
      "주식회사 TOONSQURE 개발팀에서 웹 프론트엔드,백엔드 작업을 하고 있습니다.",
    src: toonsImg,
  },
  {
    title: "(주)Group M Korea 근무",
    position: "이커머스 플래너 인턴",
    duration: "2022.1 ~ 2022.9",
    description:
      "주식회사 Group M Korea Mediacom에서 이커머스 플래너 인턴 업무를 하였습니다.",
    src: gmImg,
  },
  {
    title: "한국공학대학교",
    position: "IT경영 전공, 벤처창업전공 부전공",
    duration: "2016.3 ~ 2023.2",
    description:
      "한국공학대학교에서 IT경영 전공과 벤처창업 부전공을 진학하였습니다.",
    src: univImg,
  },
  {
    title: "더 자세한 내용은 노션 포트폴리오에 있습니다.",
    position: "",
    duration: "",
    description: "",
    src: "",
  },
];

export function History() {
  return (
    <HistoryWrapper id="history">
      <div className="title">HISTORY</div>
      <div className="history-container">
        <div className="history-table-box">
          {historyData.map((item, index) => (
            <div className="history-table" key={index}>
              {item.src !== "" && (
                <div className="history-img-box">
                  <img src={item.src} alt="img" />
                </div>
              )}
              <div className="history-text-box">
                <div className="table-title">{item.title}</div>
                <div className="table-position">{item.position}</div>
                <div className="table-duration">{item.duration}</div>
                <div className="table-description">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HistoryWrapper>
  );
}

import { ContactWrapper } from "../styles/contact.modules";
import gitLogoImg from "../assets/contact/github-logo.svg";
import mailImg from "../assets/contact/mail-outline.svg";
import blogImg from "../assets/contact/laptop-outline.svg";
import clipboardImg from "../assets/contact/clipboard.svg";

export function Contact() {
  const copyText = () => {
    navigator.clipboard
      .writeText("ge72946@gmail.com")
      .then(() => {
        alert("복사되었습니다.");
      })
      .catch((err) => {
        console.error("복사 실패:", err);
      });
  };

  return (
    <ContactWrapper id="contact">
      <div className="title">CONTACT</div>
      <div className="contact-box">
        <div className="address-box">
          <div className="address-title">
            여러분의 말씀 하나하나 깊이 새기겠습니다.
            <br />
            <br />
            편하게 연락 주시면 감사하겠습니다.
          </div>
          <div className="address-item">
            <div className="item-box">
              <a href="mailto:ge72946@gmail.com">
                <img src={mailImg} alt="MailImage" className="mail-svg" />
              </a>
              <div className="item-text">GMAIL</div>
              <div className="clipboard-text" onClick={copyText}>
                <img src={clipboardImg} alt="clipboard" />
                ge72946@gmail.com
              </div>
            </div>
          </div>
          <div className="address-item">
            <div className="item-box">
              <a
                href="https://github.com/yundimin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gitLogoImg} alt="gitImage" className="git-svg" />
              </a>
              <div className="item-text">GITHUB</div>
              <a
                href="https://github.com/yundimin"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/yundimin
              </a>
            </div>
          </div>
          <div className="address-item">
            <div className="item-box">
              <a
                href="https://jminn.tistory.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={blogImg} alt="blogImage" className="blog-svg" />
              </a>
              <div className="item-text">BLOG</div>
              <a
                href="https://jminn.tistory.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                jminn.tistory.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

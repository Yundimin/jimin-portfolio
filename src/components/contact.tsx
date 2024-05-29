import { ContactWrapper } from "../styles/contact.modules";
import gitLogoImg from "../assets/contact/github-logo.svg";
import mailImg from "../assets/contact/mail-outline.svg";
import blogImg from "../assets/contact/laptop-outline.svg";
import { useState } from "react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // await firebase.firestore().collection('emails').add({
      //   name,
      //   email,
      //   message,
      //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      // });
      alert("Email sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email: ", error);
      alert("Error sending email");
    }
  };

  return (
    <ContactWrapper id="contact">
      <div className="title">CONTACT</div>
      <div className="contact-box">
        <div className="address-box">
          <div className="address-title">
            여러분의 말씀 하나하나 깊이 새기겠습니다.
            <br />
            편하게 연락 주시면 감사하겠습니다.
          </div>
          <div className="address-item">
            <div className="item-box">
              <img src={mailImg} alt="Img" />
              <div className="item-text">MAIL</div>
            </div>
            <div className="mail-text">ge72946@gmail.com</div>
          </div>
          <div className="address-item">
            <div className="item-box">
              <img src={gitLogoImg} alt="Img" />
              <div className="item-text">GITHUB</div>
            </div>
            <a
              href="https://github.com/yundimin"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/yundimin
            </a>
          </div>
          <div className="address-item">
            <div className="item-box">
              <img src={blogImg} alt="Img" />
              <div className="item-text">BLOG</div>
            </div>

            <a
              href="https://jminn.tistory.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              jminn.tistory.com
            </a>
          </div>
        </div>
        <div className="email-box">
          <form onSubmit={handleSubmit}>
            <div className="name-box">
              <div className="name-title">NAME</div>
              <input
                type="text"
                placeholder="이름을 입력해주세요."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mail-box">
              <div className="mail-title">MAIL</div>
              <input
                type="email"
                placeholder="이메일 주소를 입력해주세요."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="message-box">
              <div className="message-title">MESSAGE</div>
              <textarea
                placeholder="내용을 입력해주세요."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className="submit-button">
              <button type="submit">메일 보내기</button>
            </div>
          </form>
        </div>
      </div>
    </ContactWrapper>
  );
}

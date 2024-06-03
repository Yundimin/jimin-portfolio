import { SkillsWrapper } from "../styles/skills.modules";
import angular from "../assets/frontend/angular.png";
import react from "../assets/frontend/React-icon.svg";
import html from "../assets/frontend/html.png";
import css from "../assets/frontend/css.png";
import js from "../assets/frontend/js-logo.webp";
import ts from "../assets/frontend/file-type-typescript-official.svg";
import styled from "../assets/frontend/styled-components.png";
import ionic from "../assets/frontend/ionic.png";
import bootstrap from "../assets/frontend/bootstrap.png";
import node from "../assets/backend/node.png";
import postgre from "../assets/backend/postgreSQL.png";
import prisma from "../assets/backend/prisma.png";
import mysql from "../assets/backend/mysql.png";
import firebase from "../assets/backend/firebase.png";
import graphql from "../assets/backend/graphql.png";
import typeorm from "../assets/backend/typeorm.png";
import datagrip from "../assets/tools/dataGrip.png";
import webstrom from "../assets/tools/WebStorm.png";
import vscode from "../assets/tools/vscode.png";
import figma from "../assets/community/figma.png";
import notion from "../assets/community/notion.png";
import slack from "../assets/community/slack.png";
import teams from "../assets/community/teams.png";
import rn from "../assets/mobileApp/reactNative.png";
import aws from "../assets/deployment/amazon.png";

export function Skills() {
  return (
    <SkillsWrapper id="skills">
      <div className="skill-title">SKILLS</div>
      <div className="skill-subtitle">현재까지 배우고 사용한 기술입니다.</div>
      <div className="skill-box">
        <div className="front-end-wrapper">
          <div className="front-end-title">Frontend</div>
          <div className="front-end-img-box">
            <img src={angular} alt="Angular" />
            <img src={react} alt="React" />
            <img src={ionic} alt="Ionic" />
            <img src={html} alt="HTML" />
            <img src={css} alt="CSS" style={{ width: 50 }} />
            <img src={js} alt="JavaScript" />
            <img src={ts} alt="TypeScript" />
            <img src={styled} alt="Styled Components" />
            <img src={bootstrap} alt="Bootstrap" />
          </div>
        </div>
        <div className="back-end-wrapper">
          <div className="back-end-title">Backend</div>
          <div className="back-end-img-box">
            <img src={node} alt="node" />
            <img src={firebase} alt="firebase" />
            <img src={postgre} alt="postgre" />
            <img src={graphql} alt="graphql" />
            <img src={prisma} alt="prisma" />
            <img src={mysql} alt="mysql" />
            <img src={typeorm} alt="typeorm" />
          </div>
        </div>
        <div className="tool-community-box">
          <div className="tool-wrapper">
            <div className="tool-title">Tools</div>
            <div className="tool-img-box">
              <img src={datagrip} alt="datagrip" />
              <img src={webstrom} alt="webstrom" />
              <img src={vscode} alt="vscode" />
            </div>
          </div>
          <div className="community-wrapper">
            <div className="community-title">Community</div>
            <div className="community-img-box">
              <img src={figma} alt="figma" />
              <img src={notion} alt="notion" />
              <img src={slack} alt="slack" />
              <img src={teams} alt="teams" />
            </div>
          </div>
        </div>
        <div className="mobile-deployment-box" style={{ display: "flex" }}>
          <div className="mobile-wrapper">
            <div className="mobile-title">Mobile App</div>
            <div className="mobile-img-box">
              <img src={rn} alt="react Native" />
            </div>
          </div>
          <div className="deployment-wrapper">
            <div className="deployment-title">Deployment</div>
            <div className="deployment-img-box">
              <img src={aws} alt="aws" />
            </div>
          </div>
        </div>
      </div>
    </SkillsWrapper>
  );
}

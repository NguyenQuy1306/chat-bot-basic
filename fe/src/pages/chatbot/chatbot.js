import React, { useState } from "react";
import "./chatbot.css";
import styles from "../styles/Trangchu.module.css";
import botImg from "../images/chatbot.png";
// import { useSearch } from "../SearchContext";

import avatarImg from "../images/chatbot.png"; // Ensure the path is correct

const ChatbotComponent = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);

  const handleStartChat = () => {
    setIsChatVisible(true);
  };

  const initChat = () => {
    // Initialize chat functionality
  };

  return (
    <div>
      <div className="parent">
        <div className="desc">
          <h1 className="text">JavaScript Chatbot</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            quasi obcaecati, voluptatum perspiciatis illum sunt? Lorem ipsum
            dolor sit amet.
          </p>
          <button id="init" onClick={handleStartChat}>
            START CHAT
          </button>
        </div>
        <div>
          <img src={avatarImg} alt="Chatbot" className="bot-img" />
        </div>
      </div>
      {isChatVisible && (
        <div
          id="test"
          style={{ position: "fixed", top: "4rem", right: "8rem" }}
        >
          <div className="child" id="chatbot">
            <div className="header">
              <div className="h-child">
                <img src={avatarImg} alt="avatar" id="avatar" />
                <div>
                  <span className="name">Chatbot</span>
                  <br />
                  <span style={{ color: "lawngreen" }}>online</span>
                </div>
              </div>
              <div>
                <button className="refBtn" onClick={initChat}>
                  <i className="fa fa-refresh"></i>
                </button>
              </div>
            </div>
            <div id="chat-box">
              {/* Chat messages will be dynamically inserted here */}
            </div>
            <div className="footer">
              <span>powered by @webhub</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotComponent;

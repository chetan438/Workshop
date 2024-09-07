import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header__top">
        <div className="header__left">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
          />
          <span className="header__logoText">Instagram</span>
        </div>
        <div className="header__right">
          <i className="fas fa-heart" title="Notifications"></i>
          <i className="fas fa-paper-plane" title="Messages"></i>
        </div>
      </div>
      <div className="header__stories">
        <div className="header__story">
          <img
            className="header__storyImage"
            src="/images/story1.jpg"
            alt="Story 1"
          />
          <span className="header__storyText"><b>My story</b></span>
        </div>
        <div className="header__story">
          <img
            className="header__storyImage"
            src="/images/story2.jpg"
            alt="Story 2"
          />
          <span className="header__storyText"><b>Soldier</b></span>
        </div>
        <div className="header__story">
          <img
            className="header__storyImage"
            src="/images/story3.jpg"
            alt="Story 2"
          />
          <span className="header__storyText"><b>Tony</b></span>
        </div>
        <div className="header__story">
          <img
            className="header__storyImage"
            src="/images/story4.jpg"
            alt="Story 2"
          />
          <span className="header__storyText"><b>Hulk</b></span>
        </div>
        <div className="header__story">
          <img
            className="header__storyImage"
            src="/images/story5.jpg"
            alt="Story 2"
          />
          <span className="header__storyText"><b>Thor</b></span>
        </div>
        <div className="header__story">
          <img
            className="header__storyImage"
            src="/images/story6.jpg"
            alt="Story 2"
          />
          <span className="header__storyText"><b>Hawkeye</b></span>
        </div>
        <div className="header__story">
          <img
            className="header__storyImage"
            src="/images/story7.jpg"
            alt="Story 2"
          />
          <span className="header__storyText"><b>Black widow</b></span>
        </div>
        {/* Add more stories as needed */}
      </div>
    </div>
  );
}

export default Header;

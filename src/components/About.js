import React from 'react';
import './About.css';
import profileImg from '../assets/1.jpg';  // Add this import

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="profile-section">
          <div className="profile-image">
            <div className="button">
              <div className="box">👑</div>
              <div className="box">V</div>
              <div className="box">I</div>
              <div className="box">V</div>
              <div className="box">E</div>
              <div className="box">K</div>
              <div className="box">👑</div>
            </div>
            <img src={profileImg} alt="Vivek Chauhan" className="profile-pic" />
          </div>
          <h1 className="name">Vivek Chauhan</h1>
          <h3 className="location">Ahmedabad, Gujarat , India.</h3>
        </div>
        
        <div className="description-card">
          <p className="about-text">
            Hi, I'm <span className="highlight-blue">Vivek Chauhan</span> from{" "}
            Ahmedabad. I have developed this website 
            to help you send secret messages securely. Whether it's for your friends, 
            partner (GF, BF), or siblings, you can share coded messages that only those 
            who know this website can understand, so share the link. Keep your conversations 
            private and secure.{" "}
            <span className="highlight-pink">जजंतरम ममंतरम</span> 😎
          </p>
        </div>
        
        <div className="contact-section">
          <h2 style={{ color: '#ffffff' }}>Contact Me :</h2>
          <div className="contact-info">
            <span className="email-label">📧 Email:</span>
            <a 
              href="mailto:thechauhanvivek@gmail.com" 
              className="email-link"
            >
              thechauhanvivek@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

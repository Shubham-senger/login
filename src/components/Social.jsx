import React, { useEffect } from 'react';
import '../assets/css/Social.css';
import linkedin from '../assets/linkedin.svg';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';

const socialLinks = [
  { href: "https://www.cooliewale.in/", icon: "../assets/logo.svg" },
  { href: "https://www.linkedin.com/company/cooliewale/?viewAsMember=true", icon: linkedin },
  { href: "https://www.facebook.com/CooliewaleOfficial", icon: facebook },
  { href: "https://www.facebook.com/CooliewaleOfficial", icon: twitter }
];

function Social() {
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * socialLinks.length);
    document.querySelector('.initial img').src = socialLinks[randomIndex].icon;
  }, []);

  return (
    <div className="social">
      <div className="initial cube">
        <img src={socialLinks[0].icon} alt="Cooliewale" />
      </div>
      {socialLinks.slice(1).map((link, index) => (
        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
          <div className="cube">
            <img src={link.icon} alt="Social Link" />
          </div>
        </a>
      ))}
    </div>
  );
}

export default Social;

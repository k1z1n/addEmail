import React from 'react';
import ArrowTop from '../../../assets/icons/ArrowTop';

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
}

const PromoButton = ({ text, section }) => {
  return (
    <button className="promo-button" onClick={() => scrollToSection(section)}>
      {text}
      <ArrowTop/>
    </button>
  );
};

export default PromoButton;
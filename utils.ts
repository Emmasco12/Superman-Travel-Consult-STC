import React from 'react';

export const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    // No offset needed for non-fixed header
    const headerOffset = 0;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition >= 0 ? offsetPosition : 0,
      behavior: "smooth"
    });
  }
};
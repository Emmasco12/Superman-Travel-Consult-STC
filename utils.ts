import React from 'react';

export const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    // Offset for the sticky header (approx 85px)
    const headerOffset = 85;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition >= 0 ? offsetPosition : 0,
      behavior: "smooth"
    });
  }
};
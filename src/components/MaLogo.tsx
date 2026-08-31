import React from 'react';
import logoImg from '@/assets/logo-image.png';

export const MaLogo = ({ className = "w-24 h-auto" }: { className?: string }) => {
  return (
    <img src={logoImg} alt="MA Logo" className={`${className} mix-blend-multiply`} loading="eager" />
  );
};

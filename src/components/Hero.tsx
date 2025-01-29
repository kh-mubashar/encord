import { HeroSectionFields } from '@/types/type';
import React from 'react';

interface HeroProps {
  heroSection: HeroSectionFields;
}

const Hero: React.FC<HeroProps> = ({ heroSection }) => {
  if (!heroSection) return null;

  const { title, subtitle, ctaText, ctaLink, backgroundImage } = heroSection;
  const backgroundImageUrl = backgroundImage?.fields.file?.url;

  return (
    <section
      className="relative flex items-center justify-center h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-4xl text-center px-6 text-white">
        <h1 className="text-5xl md:text-6xl font-bold">{title}</h1>
        <p className="mt-4 text-lg md:text-xl">{subtitle}</p>
        <a
          href={ctaLink}
          className="mt-6 inline-block bg-blue-600 px-6 py-3 rounded-lg text-lg"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
};

export default Hero;

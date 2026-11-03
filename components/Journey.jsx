"use client";
import AnimatedText from "./AnimatedText";
import Cards from "./Cards/Cards";
import { useTranslations } from 'next-intl';

const Journey = () => {
  const translations = useTranslations('Journey');
  return (
    <section id="journey">
      <div className="container mx-auto">
        <AnimatedText
          text={translations('title')}
          textStyles="h2 mb-[30px] text-center"
        />
        <Cards />
      </div>
    </section>
  );
};

export default Journey;

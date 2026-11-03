import StatsItem from "./StatsItem";
import { useTranslations } from 'next-intl';

const statsData = [
  {
    endCountNum: 3,
    endCountText: "+",
    text: "experience",
  },
  {
    endCountNum: 55,
    endCountText: "+",
    text: "projects",
  },
  {
    endCountNum: 10,
    endCountText: "+",
    text: "certifications",
  },
];

const Stats = () => {
  const translations = useTranslations('Stats');
  return (
    <section className="grid grid-cols-3 w-full max-w-[380px] mx-auto xl:mx-0 gap-2">
      {statsData.map((item, index) => {
        return (
          <StatsItem
            endCountNum={item.endCountNum}
            endCountText={item.endCountText}
            text={translations(item.text)}
            key={index}
          />
        );
      })}
    </section>
  );
};

export default Stats;

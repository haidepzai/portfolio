import StatsItem from "./StatsItem";

const statsData = [
  {
    endCountNum: 4,
    endCountText: "+",
    text: "Yrs. of Experience",
  },
  {
    endCountNum: 55,
    endCountText: "+",
    text: "Projects on Github",
  },
  {
    endCountNum: 10,
    endCountText: "+",
    text: "Certifications",
  },
];

const Stats = () => {
  return (
    <section className="flex justify-center xl:justify-normal mx-auto xl:mx-0 xl:w[380px] gap-4 xl:gap-0">
      {statsData.map((item, index) => {
        return (
          <StatsItem
            endCountNum={item.endCountNum}
            endCountText={item.endCountText}
            text={item.text}
            key={index}
          />
        );
      })}
    </section>
  );
};

export default Stats;

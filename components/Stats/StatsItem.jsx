import CountUp from "react-countup";

const StatsItem = ({ endCountNum, endCountText, text }) => {
  return (
    <div className="flex xl:flex-1 flex-col items-center text-center">
      <div className="font-primary text-primary text-4xl xl:text-5xl leading-none">
        <CountUp end={endCountNum} delay={1} duration={4} />
        <span>{endCountText}</span>
      </div>
        <p className="text-sm">{text}</p>
    </div>
  );
};

export default StatsItem;
